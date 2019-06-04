function forEachMethod(...arr){
  let newArray = [];
  for(let i=0; i < arr.length; i++){
    newArray[i] = "Welcome " + arr[i];
  }
  console.log(newArray);
  return newArray
}


export default forEachMethod;