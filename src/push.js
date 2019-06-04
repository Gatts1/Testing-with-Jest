function pushMethod(arr, value) {
  const lengthVar = arr.length;
  arr[lengthVar] = value;
  return arr;
}

export default pushMethod;