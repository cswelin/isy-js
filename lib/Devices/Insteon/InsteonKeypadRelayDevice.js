Object.defineProperty(exports, "__esModule", { value: true });
exports.InsteonKeypadRelayDevice = void 0;
const InsteonDevice_1 = require("./InsteonDevice");
const InsteonRelayDevice_1 = require("./InsteonRelayDevice");
class InsteonKeypadRelayDevice extends InsteonDevice_1.KeypadDevice(InsteonRelayDevice_1.InsteonRelayDevice) {
    constructor(isy, deviceNode) {
        super(isy, deviceNode);
    }
}
exports.InsteonKeypadRelayDevice = InsteonKeypadRelayDevice;
