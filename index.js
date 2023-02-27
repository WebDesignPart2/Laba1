"use strict";
class Lab1Functions {
    splitStringByWords(inputStr) {
        let names = inputStr.split(" ");
        console.log(names);
    }
    AllPermutations(word) {
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
}
let laba = new Lab1Functions();
laba.splitStringByWords("Bohdan Anton Somethin And More");
laba.AllPermutations("Bohdan");
