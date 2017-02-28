const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export default class Pangram {
  constructor(string) {
    this.string = string.toLowerCase();
  }

  isPangram() {
    const alphabetArray = alphabet.split('').filter((letter) => {
      return !this.string.includes(letter);
    });
    return alphabetArray.length === 0;
  }
}