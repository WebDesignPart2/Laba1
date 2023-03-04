"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainService = void 0;
class TrainService {
    constructor() {
        this.trains = new Array();
    }
    Add(train) {
        this.trains.push(train);
    }
    serachTrainByName(trainName) {
        let searchTrain = this.trains
            .filter((train) => train.raceName === trainName)
            .pop();
        if (searchTrain === undefined) {
            throw new Error("No Train with this name");
        }
        return searchTrain;
    }
    maxBy(arr, fn) {
        return arr.reduce((acc, curr) => {
            const currValue = fn(curr);
            return currValue > fn(acc) ? curr : acc;
        }, arr[0]);
    }
    mustPopularTrain(trains) {
        return this.maxBy(trains, (train) => train.passagersCount());
    }
    ChangeTrain(oldTrainName, newTrainName) {
        let train = this.serachTrainByName(oldTrainName);
        if (train === undefined)
            throw new Error("No Train");
        let id = this.trains.indexOf(train);
        this.trains[id].raceName = newTrainName;
    }
}
exports.TrainService = TrainService;
