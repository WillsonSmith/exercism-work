const reactionLyrics = {
  fly: "I don't know why she swallowed the fly. Perhaps she'll die.",
  spider: "It wriggled and jiggled and tickled inside her.",
  bird: "How absurd to swallow a bird!",
  cat: "Imagine that, to swallow a cat!",
  dog: "What a hog, to swallow a dog!",
  goat: "Just opened her throat and swallowed a goat!",
  cow: "I don't know how she swallowed a cow!",
  horse: "She's dead, of course!"
}

const specialSpiderLyric = ' that wriggled and jiggled and tickled inside her.';

const creatureArray = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];

function buildFirstLine() {
  const creature = creatureArray[0];
  return `I know an old lady who swallowed a ${creature}.
${reactionLyrics[creature]}
`
}

function swallowedTo(creature) {
  const creatureIndex = creatureArray.indexOf(creature);
  const previousCreature = creatureArray(creatureIndex - 1);
  return `She swallowed the ${creature} to catch the ${previousCreature}${previousCreature === 'spider' ? specialSpiderLyric: '.'}`
}

function buildLine(creature, previousCreatureIndex) {
  const previousCreature = creatureArray[previousCreatureIndex];
  return `I know an old lady who swallowed a ${creature}.
${reactionLyrics[creature]}
swallowedTo(creature)
${reactionLyrics.fly}
`
}

function spliceToItem(array, startPoint, endPoint) {
  const startIndex = startPoint - 1;
  const spliceLength = (endPoint - startPoint) || 1;
  return [].concat(array).splice(startIndex, spliceLength);
}

class Song {
  verse(start, end = start) {
    const linesArray = spliceToItem(creatureArray, start, end);

    return linesArray.reverse().reduce((acc, current) => {
      if (current === "fly" && linesArray.length === 1) {
        return acc + buildFirstLine();
      }
      return acc + buildLine(current, creatureArray.indexOf(current) - 1);
    }, "");
    // return linesArray.reduce((acc, current) => {
    //   if (!acc.lines.length) {
    //     return {index: acc.index + 1, lines: acc.lines + buildFirstLine()};
    //   }
    //   return {index: acc.index + 1, lines: buildLine(acc.index)};
    // }, {index: start - 1, lines: ""}).lines;

  }

  verses(start, end) { return this.verse(start, end) }
}

export default Song;