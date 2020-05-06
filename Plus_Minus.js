function plusMinus(arr) {
  const countPositive = arr.filter(x => x > 0).length;
  const countNegative = arr.filter(x => x < 0).length;
  const countZero = arr.filter(x => x === 0).length;

  let length = arr.length;


/*
  for (let i = 0; i < length; i++){
      if (arr[i] > 0){
          countPositive++;
      }else if (arr[i] < 0){
          countNegative++;
      }else{
          countZero++;
      }
  }
*/
  let ratioPositive = (countPositive / length).toFixed(6);
  let ratioNegative = (countNegative / length).toFixed(6);
  let ratioZero = (countZero / length).toFixed(6);

  console.log(ratioPositive);
  console.log(ratioNegative);
  console.log(ratioZero);
}