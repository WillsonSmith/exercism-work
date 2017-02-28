const failedTranscription = new Error('Invalid input DNA.');

const transcribed = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}

export default class Transcriptor {
  toRna(DNA) {
    const DnaArray = DNA.split('');
    return DnaArray.map((letter) => {
      if (!transcribed[letter]) {
        throw failedTranscription;
      }
      return transcribed[letter];
    }).join('');
  }
}