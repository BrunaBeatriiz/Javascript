let arr = [1, 2, [3, 4], [5, [6, 7]]];
let arrayLimpo = [];

for (let i = 0; i < arr.length; i++) {
  let item = arr[i];
  if (typeof item === "number") {
  
    arrayLimpo.push(item);

  } else {

    for (let j = 0; j < item.length; j++) {

      if (typeof item[j] === "number") {
      
        arrayLimpo.push(item[j]);
      } else {

        for (let k = 0; k < item.length; k++) {

          if (typeof item[j][k] === "number") {
          
            arrayLimpo.push(item[j][k]);
          }
        }
      }
    }
  }
}

//console.log(arr.flat(Infinity));
console.log("Array limpo: " + arrayLimpo);
