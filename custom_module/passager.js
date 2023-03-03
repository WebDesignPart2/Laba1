"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passager = void 0;
const ticket_1 = require("./ticket");
class Passager {
    constructor(name) {
        this.name = name;
        this.tickets = new Array();
    }
    buyTicket(train) {
        var _a;
        (_a = this.tickets) === null || _a === void 0 ? void 0 : _a.push(new ticket_1.Ticket(train.raceName, new ticket_1.Soled()));
        train.AddPassager(this);
    }
    changeTicket(oldTrain, newTrain) {
        var _a;
        let ticket = (_a = this.tickets) === null || _a === void 0 ? void 0 : _a.filter((tick) => tick.race === oldTrain.raceName).pop();
        ticket = new ticket_1.Ticket(newTrain.raceName, new ticket_1.Soled());
        oldTrain.RemovePassager(this);
        newTrain.AddPassager(this);
    }
    removeTicket(train) {
        var _a;
        let ticket = (_a = this.tickets) === null || _a === void 0 ? void 0 : _a.filter((tick) => tick.race === train.raceName).pop();
        this.tickets = this.tickets.filter((tick) => tick !== ticket);
        train.RemovePassager(this);
    }
    print() {
        const allRaices = this.tickets.reduce((acc, ticket, index) => {
            const separator = index === 0 ? "" : ", ";
            return acc + separator + ticket.race;
        }, "");
        console.log(this.name + ": " + allRaices);
        console.log("--------------------");
    }
    CancleTicket(train) {
        this.removeTicket(train);
    }
}
exports.Passager = Passager;
