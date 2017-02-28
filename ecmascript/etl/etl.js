export default function transform(old) {
  const keys = Object.keys(old);
  return keys.reduce((acc, key) => {
    old[key].forEach((k) => acc[k.toLowerCase()] = Number(key));
    return acc;
  }, {});
}