import promptSync from "prompt-sync";
import { Train } from "../лаба 1/custom_module/Train";
import { Ticket, Soled, NonSoled } from "./custom_module/ticket";
import { Passager } from "./custom_module/passager";

const prompter = promptSync();

class Lab1Functions {
  splitStringByWords(inputStr: string) {
    let names: Array<string> = inputStr.split(" ");
    console.log(names);
  }
  AllPermutations(word: string) {
    console.log(word);
    let charArray = word.split("");
    const n = charArray.length;
    const p = charArray.map((_, i) => i);

    let i = 1;
    while (i < n) {
      p[i]--;

      let j = (i % 2) * p[i];
      [charArray[j], charArray[i]] = [charArray[i], charArray[j]];
      console.log(charArray.join(""));

      i = 1;
      while (p[i] == 0) {
        p[i] = i;
        i += 1;
      }
    }
  }
  factorial(num: number): number {
    if (num === 0) return 1;
    return num * this.factorial(num - 1);
  }
  mostFrequentElement(arr: Array<number>): number | undefined {
    return arr
      .sort(
        (a, b) =>
          arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
      )
      .pop();
  }

  quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[0];
    const leftArr: number[] = [];
    const rightArr: number[] = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }

    return [...this.quickSort(leftArr), pivot, ...this.quickSort(rightArr)];
  }
}

function main() {
  let laba = new Lab1Functions();
  let choice: string = prompter("Enter task number: ");
  while (choice !== "0") {
    switch (choice) {
      case "1":
        laba.splitStringByWords("Bohdan andrii petro sergiy slslslls");
        break;
      case "2":
        laba.AllPermutations("Break");
        break;
      case "3":
        console.log(laba.factorial(6));
        break;
      case "4":
        console.log(
          laba.mostFrequentElement([1, 1, 2, 3, 6, 7, 8, 2, 2, 2, 3])
        );
        break;
      case "5":
        break;
      case "6":
        console.log(laba.quickSort([5, 6, 7, 8, 9, 2, 11, 1]));
        break;
      case "7":
        task_7();
        break;
      default:
        console.log("Wrong choice");
        break;
    }
    choice = prompter("Enter task number: ");
  }
}

function task_7() {
  let trains: Array<Train> = new Array<Train>();
  trains.push(new Train("If - Kyiv"));
  trains.push(new Train("If - Lviv"));
  trains.push(new Train("Lviv - Ternopil"));
  let passager = new Passager("Sergiy");
  passager.buyTicket(trains[0]);
  passager.buyTicket(trains[1]);

  let train = serachTrainByName("If - Kyiv", trains);
  train.print();
  let findPas = train.searchPassager("Sergiy");
  findPas?.print();
}

function serachTrainByName(trainName: string, trains: Array<Train>): Train {
  let searchTrain = trains
    .filter((train) => train.raceName === trainName)
    .pop();
  if (searchTrain === undefined) {
    throw new Error('No Train with this name');
  }
  return searchTrain;
}

function maxBy<T>(arr: T[], fn: (x: T) => number): T | undefined {
  return arr.reduce((acc, curr) => {
    const currValue = fn(curr);
    return currValue > fn(acc) ? curr : acc;
  }, arr[0]);
}

function mustPopularTrain(trains : Array<Train>) : Train | undefined{ 
  return maxBy(trains, (train) => train.passagersCount());
}
main();
