//01Created class: Sentence

class Sentence {
  constructor(data) {
    this.data = data; //02Create constructor: data parameter property
  }
  wordCount() {
    return this.data.split(` `).length;
  }
  hasLetter(letter) {
    return this.data.indexOf(letter) !== -1;
  }
  letterCount(letter) {
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === letter) {
        count++;
      }
    }
    return count;
  }
  stats() {
    const obj = {};
    const words = this.data.split(` `);
    words.forEach((word) => {
      if (ogj[word] === underfined) {
        obj[word] = 0;
      }
      obj[word]++;
    });
    return obj;
  }
}

//03Create window.prompt to collect data

const data = window.prompt(`Enter a sentence`, 'and water is "YELLOW"');
const s1 = new Sentence(data);
console.log(s1.wordCount());
console.log(s1.hasLetter(`X`));
console.log(s1.hasLetter(`q`));
console.log(s1.letterCount(`e`));
console.log(s1.letterCount(` `));
