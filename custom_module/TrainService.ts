import { Train } from "./Train";

export class TrainService {
  private trains = new Array<Train>();

  Add(train: Train) {
    this.trains.push(train);
  }

  serachTrainByName(trainName: string): Train {
    let searchTrain = this.trains
      .filter((train) => train.raceName === trainName)
      .pop();
    if (searchTrain === undefined) {
      throw new Error("No Train with this name");
    }
    return searchTrain;
  }

  private maxBy<T>(arr: T[], fn: (x: T) => number): T | undefined {
    return arr.reduce((acc, curr) => {
      const currValue = fn(curr);
      return currValue > fn(acc) ? curr : acc;
    }, arr[0]);
  }

  mustPopularTrain(trains: Array<Train>): Train | undefined {
    return this.maxBy(trains, (train) => train.passagersCount());
  }
  ChangeTrain(oldTrainName: string, newTrainName: string): void {
    let train = this.serachTrainByName(oldTrainName);
    if (train === undefined) throw new Error("No Train");

    let id = this.trains.indexOf(train);
    this.trains[id].raceName = newTrainName;
  }
}
