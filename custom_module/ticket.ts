export class Ticket {
  constructor(public race: string, public soledStartegy: SoledStrategy) {}
}
interface SoledStrategy {
  isSoled(): boolean;
}

export class Soled implements SoledStrategy {
  isSoled(): boolean {
    return true;
  }
}

export class NonSoled implements SoledStrategy {
  isSoled(): boolean {
    return false;
  }
}

