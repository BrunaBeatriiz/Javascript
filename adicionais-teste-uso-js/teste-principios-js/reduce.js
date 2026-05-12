let ages = [12,23,9,4,14,34];

const sumAges = ages.reduce(function(age, accumulator){
    return accumulator + age;
},0)
console.log(sumAges);