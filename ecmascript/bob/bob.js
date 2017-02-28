//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function isUpperCase(string) {
  return string === string.toUpperCase();
}

function hasLetters(string) {
  return string.match(/[a-z]/i);
}

function isQuestion(string) {
  return string[string.length - 1] === '?';
}

class Bob {
  hey(message) {
    const lastChar = message[message.length - 1];
    if (message.trim().length < 1) {
      return 'Fine. Be that way!'
    }
    if (isUpperCase(message) && hasLetters(message)) {
      return 'Whoa, chill out!';
    }
    if (isQuestion(message)) {
      return 'Sure.'
    }

    return 'Whatever.';
  }
}

export default Bob;

