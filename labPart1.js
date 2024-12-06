const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let arr = [];
let arr2 = str.split("\n");

for(i = 0; i < arr2.length; i++){  
    arr.push(arr2[i].split(","))
}

console.log(arr);
