export default class Words {
  count(string) {
    const words = string.split(/\s/);
    return words.reduce((wordCounts, word) => {
      const trimmed = word.trim().toLowerCase();
      const currentWord = wordCounts[trimmed];
       if (trimmed.length < 1) {
         return wordCounts;
       }

       if (currentWord && typeof currentWord === 'number') {
         wordCounts[trimmed] += 1;
       } else {
        wordCounts[trimmed] = 1;
       }

       return wordCounts;
    }, {});
  }
}