"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonSoled = exports.Soled = exports.Ticket = void 0;
class Ticket {
    constructor(race, soledStartegy) {
        this.race = race;
        this.soledStartegy = soledStartegy;
    }
}
exports.Ticket = Ticket;
class Soled {
    isSoled() {
        return true;
    }
}
exports.Soled = Soled;
class NonSoled {
    isSoled() {
        return false;
    }
}
exports.NonSoled = NonSoled;
