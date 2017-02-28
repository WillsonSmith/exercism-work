const zeroBottleString = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`;

function sing(from, to, string) {
  string += from !== to ? `${verse(from)}\n` : verse(from);
  
  if (from !== to) {
    return sing(from - 1, to, string);
  } else {
    return string;
  }
}

function pluralized(number) {
  if (number > 1) {
    return 's';
  }
  return false;
}

function verse(number) {
  let pluralize = pluralized(number) || '';
  const oneLess = number - 1;
  if (number === 0) {
    return zeroBottleString;
  }

  return `${number} bottle${pluralize} of beer on the wall, ${number} bottle${pluralize} of beer.
Take ${pluralize === 's' ? 'one' : 'it'} down and pass it around, ${oneLess || 'no more'} bottle${ oneLess > 1 || oneLess === 0 ? 's' : '' } of beer on the wall.
`;
}
const Beer = {
  verse(number) {
    return verse(number);
  },
  sing(from = 99, to = 0) {
    return sing(from, to, '');
  }
}

export default Beer;