export default function elementStr(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}
