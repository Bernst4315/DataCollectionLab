const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let arr = [];
let arr2 = str.split("\n");

for(let i = 0; i < arr2.length; i++){  
    arr.push(arr2[i].split(","))
}

console.log(arr);

let newArr = []; 
let obj = {};

for(let i = 0; i < arr[0].length; i++){
    let prop = arr[0][i].toLowerCase();
    let value = arr[1][i];
    obj[prop] = value; 
}

//create new array to fill w/ objects
//arr[0] - turn into properties for each object (spread operator might be used)
//rest of arr values will need to e assigened to each objt prop

// obj = {age: 0}
// obj.age=10; 
// const str2 = arr[0][0];

// obj[str2.toLowerCase()] = arr[1][0];// bracket notation

console.log(obj);