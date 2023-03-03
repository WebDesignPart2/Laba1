"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Train = void 0;
class Train {
    constructor(raceName) {
        this.raceName = raceName;
        this.passagers = new Array();
    }
    AddPassager(passager) {
        this.passagers.push(passager);
    }
    RemovePassager(passager) {
        this.passagers = this.passagers.filter((pas) => pas !== passager);
    }
    print() {
        var _a;
        (_a = this.passagers) === null || _a === void 0 ? void 0 : _a.forEach((pas) => {
            pas.print();
        });
    }
    passagersCount() {
        return this.passagers.length;
    }
    searchPassager(passagerName) {
        return this.passagers.filter((pas) => pas.name === passagerName).pop();
    }
}
exports.Train = Train;
