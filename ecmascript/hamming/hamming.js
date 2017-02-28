class Hamming {
  compute(first, second) {
    const firstArr = first.split('');
    const secondArr = second.split('');

    if (first.length !== second.length) {
      const err = new Error('DNA strands must be of equal length.');
      throw err;
    }
    return firstArr.filter((letter, index) => letter !== secondArr[index]).length;
  }
}

export default Hamming;