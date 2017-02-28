import BigInt from './big-integer';

function grains(square, lastSquare = 0) {
  if (square === 0) {
    return lastSquare;
  }
  const value = lastSquare ? BigInt(lastSquare).multiply(2) : 1;
  return grains(square - 1, value);
}

class Grains {
  square(square) {
    return grains(square).toString();
  }
  total() {
    let total = BigInt(0);
    for (var i = 1; i < 65; i++) {
      total = total.add(grains(i));
    }
    return total.toString();
  }
}

export default Grains;