const triangleTypes = {
  1: 'equilateral',
  2: 'isosceles',
  3: 'scalene'
}

function throwNegative(side) {
  if(Math.sign(side) === -1) {
      throw new Error('negative sides are illegal');
    }
}

function throwZeroSize(set) {
  if (set.size === 1 && set.has(0)) {
    throw new Error('no size set');
  }
}

function throwTriangleInequality(sortedArray) {
  if ((sortedArray[0] + sortedArray[1]) < sortedArray[2]) {
    throw new Error('Violates inequality');
  }
}

function testForErrors(set, sortedArray) {
  throwTriangleInequality(sortedArray);
  throwZeroSize(set);
  sortedArray.forEach(throwNegative);
}

function triangleType(sidesArray) {
  const sorted = sidesArray.sort((a, b) =>  a - b);
  const sideSet = new Set();
  sorted.forEach((side) => sideSet.add(side));
  testForErrors(sideSet, sorted);
  return triangleTypes[sideSet.size];
}

class Triangle {
  constructor(...args) {
    this.sides = args;
  }

  kind() {
    return triangleType(this.sides);
  }
}

export default Triangle;