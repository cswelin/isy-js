Object.defineProperty(exports, "__esModule", { value: true });
exports.InsteonOutletDevice = exports.KeypadDevice = exports.InsteonSwitchDevice = exports.InsteonLampDevice = void 0;
const InsteonRelayDevice_1 = require("./InsteonRelayDevice");
exports.InsteonLampDevice = (InsteonBaseDevice) => {
    return class extends InsteonBaseDevice {
        constructor(isy, node) {
            super(isy, node);
            this.isDimmable = true;
        }
    };
};
// tslint:disable-next-line: variable-name
exports.InsteonSwitchDevice = (InsteonBaseDevice) => (class extends InsteonBaseDevice {
    constructor(isy, node) {
        super(isy, node);
    }
});
exports.KeypadDevice = (IB) => (class extends IB {
    addChild(childDevice) {
        super.addChild(childDevice);
    }
});
class InsteonOutletDevice extends InsteonRelayDevice_1.InsteonRelayDevice {
    constructor(isy, deviceNode) {
        super(isy, deviceNode);
    }
}
exports.InsteonOutletDevice = InsteonOutletDevice;
