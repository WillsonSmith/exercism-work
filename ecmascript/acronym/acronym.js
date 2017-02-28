function reduceToString(acronym, word) {
  const upperLetters = word.split(/(?=[A-Z])/);
    if (upperLetters.length > 1 && !word.charAt(1).match(/[A-Z]/)) {
      return acronym + upperLetters.reduce(reduceToString, "");
    }
    return acronym + word.charAt(0).toUpperCase();
}

const Acronyms = {
  parse(phrase) {
    const words = phrase.split(/\s|[-]/g);
    return words.reduce(reduceToString, "");
  }
};

export default Acronyms;