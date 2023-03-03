import { Passager } from "./passager";

export class Train {
  private passagers: Array<Passager> = new Array<Passager>();
  constructor(public raceName: string) {}
  AddPassager(passager: Passager): void {
    this.passagers.push(passager);
  }
  RemovePassager(passager: Passager): void {
    this.passagers = this.passagers.filter((pas) => pas !== passager);
  }
  print(): void {
    this.passagers?.forEach((pas) => {
      pas.print();
    });
  }
  passagersCount() : number{
    return this.passagers.length;
  }
  searchPassager(passagerName: string): Passager | undefined {
    return this.passagers.filter((pas) => pas.name === passagerName).pop();
  }
}