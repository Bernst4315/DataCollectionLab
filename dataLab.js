const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//Part 1: Turns String into an Array
let arr = [];
let arr2 = str.split("\n");

for(let i = 0; i < arr2.length; i++){  
    arr.push(arr2[i].split(","))
}

console.log(arr);

//Part Two: Puts Array Values into an object and places them into a new array
let newArr = []; 
let obj = {};

for(let i = 0; i < 4; i++){
    let newObj = {};

    for(let j = 0; j < arr[0].length; j++){ 

        let prop = arr[0][j].toLowerCase();
        let value = arr[i+1][j];
        obj[prop] = value;
        newObj= {...obj};

    }

    newArr.push(newObj);
} 

console.log(newArr);

//Part Three: Manipulating array with methods and calculating average age
newArr.pop();
newArr.splice(1, 0, {id: "48", name: "Berry", occupation: "Runner", age: "25"})
newArr.push({id: "7", name: "Bilbo", occupation: "None", age: "111"})
console.log(newArr);

let ageTotal = 0; 

for(i = 0; i < newArr.length; i++){
    
    ageTotal += Number(newArr[i].age);
    
}

const aveAge = ageTotal/newArr.length; 

console.log(aveAge);

//Part 4: turning an array of objects back into a cvs string


let getProp = [];
let getVal = [];
let arrFinal = [];

for(let i = 0; i < newArr.length; i++){
let getObj = newArr[i];
for (const property in getObj) {
    if(getObj === newArr[0]) getProp.push(property);
    getVal.push(getObj[property]);
};
arrFinal.push(getVal);
}

arrFinal.push(getProp)
//for (const property in getObj) getVal.push(getObj[property]);

console.log(arrFinal);

// if("id" in newArr[0]) test.push("Id");
    
