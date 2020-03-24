/// <reference types="node" />
import { ISY } from '../../ISY';
import { ISYDevice } from '../ISYDevice';
import { InsteonBaseDevice } from './InsteonBaseDevice';
import { InsteonDimmableDevice } from './InsteonDimmableDevice';
declare const InsteonFanMotorDevice_base: {
    new (...args: any[]): {
        [x: string]: any;
        readonly level: number;
        updateLevel(level: number): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly children: ISYDevice[];
        readonly scenes: import("../../ISYScene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        hidden: boolean;
        location: string;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: import("../../ISYScene").ISYScene): void;
        addChild(childDevice: ISYDevice): void;
        readonly parentDevice: ISYDevice;
        refreshProperty(propertyName: string): Promise<any>;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<any>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        family: any;
        folder: string;
        parent: any;
        parentType: number;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: (...args: any[]) => void): void;
    };
} & {
    new (...args: any[]): {
        [x: string]: any;
        readonly state: boolean;
        updateState(state: boolean): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly children: ISYDevice[];
        readonly scenes: import("../../ISYScene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        hidden: boolean;
        location: string;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: import("../../ISYScene").ISYScene): void;
        addChild(childDevice: ISYDevice): void;
        readonly parentDevice: ISYDevice;
        refreshProperty(propertyName: string): Promise<any>;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<any>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        family: any;
        folder: string;
        parent: any;
        parentType: number;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: (...args: any[]) => void): void;
    };
} & typeof InsteonBaseDevice;
export declare class InsteonFanMotorDevice extends InsteonFanMotorDevice_base {
    constructor(isy: ISY, deviceNode: {
        type: string;
    });
    get isOn(): boolean;
    get fanSpeed(): number;
    updateFanSpeed(level: number): Promise<any>;
    updateIsOn(isOn: boolean): Promise<void>;
}
export declare class InsteonFanDevice extends InsteonBaseDevice {
    constructor(isy: ISY, deviceNode: {
        type: string;
    });
    Light: InsteonDimmableDevice;
    Motor: InsteonFanMotorDevice;
    handleEvent(event: any): boolean;
    addChild(childDevice: ISYDevice): void;
    updateFanSpeed(level: number): Promise<any>;
    updateIsOn(isOn: boolean): Promise<void>;
}
export {};
