const letterOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const usedNames = new Set();

function randomLetter() {
  return letterOptions.charAt(Math.floor(Math.random() * 26));
}
function randomNumber() {
  return [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)].join('');
}

function generateName() {
  const robotName = `${randomLetter()}${randomLetter()}${randomNumber()}`;
  if (usedNames.has(robotName)) {
    return generateName();
  }
  usedNames.add(robotName);
  return robotName;
}

class Robot {
  constructor() {
    this.robotName = generateName();
  }

  reset() {
    const lastName = this.robotName;
    this.robotName = generateName();
  }

  get name() {
    return this.robotName;
  }
}

export default Robot;