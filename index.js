"use strict";
class Lab1Functions {
    splitStringByWords(inputStr) {
        let names = inputStr.split(" ");
        console.log(names);
    }
}
let laba = new Lab1Functions();
laba.splitStringByWords("Bohdan Anton Somethin And More");
