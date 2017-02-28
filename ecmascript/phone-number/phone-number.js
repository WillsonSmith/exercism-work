function containsLetters(number) {
  return number.toUpperCase() !== number;
}

function startsWithOne(number) {
  return number[0] === '1';
}

function validNumber(number) {
  const numbersOnly = number.match(/[0-9]/g);

  if (containsLetters(number)) {
    return false;
  }
  if ((numbersOnly.length > 10 && !startsWithOne(numbersOnly)) || numbersOnly.length < 10) {
    return false;
  }
  return numbersOnly.join('');
}

export default class PhoneNumber {
  constructor(number) {
    this.num = number;
  }

  number() {
    const validatedNumber = validNumber(this.num);
    if (!validatedNumber) {
      return null;
    }
    if (startsWithOne(validatedNumber) && validatedNumber.length === 11) {
      return validatedNumber.split('').splice(1, validatedNumber.length - 1).join('');
    }
    return validatedNumber;
  }
}