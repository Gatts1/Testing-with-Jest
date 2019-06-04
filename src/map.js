function mapMethod(...arr) {
  let newMap = [];
  for(let i = 0; i < arr.length ; i++) {
    newMap[i] = arr[i] * 2;
  }
  return(newMap);
}
 
export default mapMethod;