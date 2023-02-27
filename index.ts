class Lab1Functions {
  splitStringByWords(inputStr: string) {
    let names: Array<string> = inputStr.split(" ");
    console.log(names);
  }
}

let laba = new Lab1Functions();
laba.splitStringByWords("Bohdan Anton Somethin And More");
