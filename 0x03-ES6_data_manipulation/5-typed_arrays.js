export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const newBuffer = new ArrayBuffer(length);
  const newView = new DataView(newBuffer, 0, length);
  const typedArray = new Int8Array(newBuffer);
  typedArray[position] = value;
  return newView;
}
