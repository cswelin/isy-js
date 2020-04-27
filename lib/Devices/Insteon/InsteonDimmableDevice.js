Object.defineProperty(exports, "__esModule", { value: true });
const ISYDevice_1 = require("../ISYDevice");
const InsteonRelayDevice_1 = require("./InsteonRelayDevice");
class InsteonDimmableDevice extends ISYDevice_1.ISYUpdateableLevelDevice(InsteonRelayDevice_1.InsteonRelayDevice) {
    constructor(isy, node) {
        super(isy, node);
        this.isDimmable = true;
    }
    get brightnessLevel() {
        return this.level;
    }
    async updateBrightnessLevel(level) {
        return super.updateLevel(level);
    }
}
exports.InsteonDimmableDevice = InsteonDimmableDevice;
