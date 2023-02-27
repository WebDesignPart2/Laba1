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
  factorial(num: number) : number {
    if (num === 0) return 1;
    return num * this.factorial(num - 1);
  }
}

let laba = new Lab1Functions();
laba.splitStringByWords("Bohdan Anton Somethin And More");
laba.AllPermutations("Bohdan");
console.log(laba.factorial(5));
