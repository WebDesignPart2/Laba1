import { trace } from "console";
import { Ticket, Soled, NonSoled } from "./ticket";
import { Train } from "./Train";

export class Passager {
  private tickets: Array<Ticket> = new Array<Ticket>();
  constructor(public name: string) {}
  buyTicket(train: Train): void {
    this.tickets?.push(new Ticket(train.raceName, new Soled()));
    train.AddPassager(this);
  }
  changeTicket(oldTrain: Train, newTrain: Train): void {
    let ticket = this.tickets
      ?.filter((tick) => tick.race === oldTrain.raceName)
      .pop();
    ticket = new Ticket(newTrain.raceName, new Soled());
    oldTrain.RemovePassager(this);
    newTrain.AddPassager(this);
  }
  removeTicket(train: Train) {
    let ticket = this.tickets
      ?.filter((tick) => tick.race === train.raceName)
      .pop();
    this.tickets = this.tickets.filter((tick) => tick !== ticket);
    train.RemovePassager(this);
  }
  print(): void {
    const allRaices = this.tickets.reduce((acc, ticket, index) => {
        const separator = index === 0 ? "" : ", ";
        return acc + separator + ticket.race;
    }, "");

    console.log(this.name + ": " + allRaices);
    console.log("--------------------");
  }
  CancleTicket(train: Train): void {
    this.removeTicket(train);
  }
}
