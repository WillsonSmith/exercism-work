export default class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
    this.wordLetters = this.word.split('');
  }

  matches(...wordArray) {
    if (Array.isArray(wordArray[0])) {
      wordArray = wordArray[0];
    }
    const sortedWordLetters = this.wordLetters.sort();
    return wordArray.filter((word) => {
      const lowerCaseWord = word.toLowerCase();
      const sorted = lowerCaseWord.split('').sort();
      if (lowerCaseWord.length !== this.word.length || lowerCaseWord === this.word) {
        return false;
      }
      return sorted.filter((letter, index) => sortedWordLetters[index] !== letter).length === 0;
    });
  }
}