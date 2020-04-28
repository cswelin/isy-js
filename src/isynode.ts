import { EventEmitter } from 'events';
import { isNullOrUndefined } from 'util';

import { Family } from './Families';
import { Categories, Controls, ISY, NodeType } from './ISY';
import { PropertyChangedEventEmitter } from './Utils';


export class ISYNode extends EventEmitter implements PropertyChangedEventEmitter {

	public readonly isy: ISY;
	public readonly flag: any;
	public readonly nodeDefId: string;
	public readonly address: string;
	[x: string]: any;
	public name: string;
	public displayName: string;

	public folder: string = '';
	public parent: any;
	public parentType: NodeType;
	public readonly elkId: string;
	public nodeType: number;

	public propsInitialized: boolean;
	public logger: (msg: any) => void;
	public lastChanged: Date;
	public enabled: boolean;
	constructor (isy: ISY, node: { flag?: any; nodeDefId?: string; address?: string; name?: string; family?: Family; parent?: any; enabled: boolean; ELK_ID?: string; }) {
		super();
		this.isy = isy;
		this.nodeType = 0;
		this.flag = node.flag;
		this.nodeDefId = node.nodeDefId;
		this.address = node.address;
		this.name = node.name;
		this.family = node.family ?? Family.Insteon;

		this.parent = node.parent;

		this.parentType = Number(this.parent?.type);

		this.enabled = node.enabled;
		this.elkId = node.ELK_ID;
		this.propertyChanged = new EventEmitter();
		this.propsInitialized = false;
		const s = this.name.split('.');
		if (s.length > 1)
			s.shift();
		this.displayName = s.join(' ').replace(/([A-Z])/g, ' $1').replace('  ', ' ').trim();
		if (this.parentType === NodeType.Folder) {

			this.folder = isy.folderMap.get(this.parent._);
			isy.logger(`${this.name} this node is in folder ${this.folder}`);
			this.logger = (msg) => {
				return isy.logger(`${this.folder} ${this.name} (${this.address}): ${msg}`);
			};

			this.displayName = `${this.folder} ${this.displayName}`;
		}
		else {
			this.logger = (msg) => {
				return isy.logger(`${this.name} (${this.address}): ${msg}`);
			};
		}

		this.logger(this.nodeDefId);
		this.lastChanged = new Date();
	}

	public handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean {
		this.lastChanged = new Date();

		return true;
	}

	public handleControlTrigger(controlName: string): boolean {
		//this.lastChanged = new Date();

		return true;
	}

	public on(event: 'PropertyChanged'|'ControlTriggered', listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any)|((controlName: string) => any)): this {
		super.on(event, listener);
		return this;
	}

	public emit(event: 'PropertyChanged'|'ControlTriggered', propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string) {
		if('PropertyChanged')
			return super.emit(event, propertyName, newValue, oldValue, formattedValue);
		else if('ControlTriggered')
			return super.emit(event,controlName);
	}


	public handleEvent(event: any): boolean {
		let actionValue = null;
		if (event.action instanceof Object) {
			actionValue = event.action._;
		} else if (event.action instanceof Number || event.action instanceof String) {
			actionValue = Number(event.action);
		}

		if (event.control in this) {
			// property not command
			const formatted = 'fmtAct' in event ? event.fmtAct : actionValue;
			return this.handlePropertyChange(event.control, actionValue, formatted);
		}
		else if(event.control === '_3')
		{
			this.logger(`Received Node Change Event: ${JSON.stringify(event)}. These are currently unsupported.`);
		}
		else {
			// this.logger(event.control);
			const e = event.control;
			const dispName = Controls[e];
			if (dispName !== undefined && dispName !== null) {
				this.logger(`Command ${dispName.label} (${e}) triggered.`);
			} else {
				this.logger(`Command ${e} triggered.`);

			}
			let controlName : string = e;
			this.handleControlTrigger(controlName);
			return true;
		}
	}




}
