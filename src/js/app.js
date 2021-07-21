export default function canIterate(obj) {
  // eslint-disable-next-line no-prototype-builtins
  if (!obj) { return false; }
  // eslint-disable-next-line no-prototype-builtins
  return Object.getPrototypeOf(obj).hasOwnProperty(Symbol.iterator);
}
