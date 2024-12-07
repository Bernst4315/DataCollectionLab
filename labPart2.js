const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//Turns String into an Array
let arr = [];
let arr2 = str.split("\n");

for(let i = 0; i < arr2.length; i++){  
    arr.push(arr2[i].split(","))
}

console.log(arr);

//Puts Array Values into an object and places them into a new array
let newArr = []; 
let obj = {};

for(let i = 0; i < 4; i++){
    let newObj = {};
    for(let j = 0; j < arr[0].length; j++){ //maybe try prop as inner loop and value as outer loop
        let prop = arr[0][j].toLowerCase();
     
   // for(let j = 0; j < arr[i].length; j++){ 
        let value = arr[i+1][j];
        obj[prop] = value;
        newObj= {...obj};
        
//}

//not working because obj is a value by ref. Need to use spreader to nake a new copy 
//All I am doing is changing what is being refered to. 
   
}newArr.push(newObj);
} 

//create new array to fill w/ objects
//arr[0] - turn into properties for each object (spread operator might be used)
//rest of arr values will need to e assigened to each objt prop

// obj = {age: 0}
// obj.age=10; 
// const str2 = arr[0][0];

// obj[str2.toLowerCase()] = arr[1][0];// bracket notation

//console.log(obj);
console.log(newArr);