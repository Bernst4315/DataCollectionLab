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

    for(let j = 0; j < arr[0].length; j++){ 

        let prop = arr[0][j].toLowerCase();
        let value = arr[i+1][j];
        obj[prop] = value;
        newObj= {...obj};

    }newArr.push(newObj);
} 

console.log(newArr);