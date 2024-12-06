const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// // let cell1 = "";
// // let cell2 = "";
// let row1 = ""; 
// let row2 = "";
// let row3 = "";
// let row4 = "";
// let count = 0; 

// for (const char of str){
    
//   if (char === "\n")count++;
//   if (char !== "\n" && count === 0) row1 = row1 + char;
//   if (char !== "\n" && count === 1) row2 = row2 + char; 
//   if (char !== "\n" && count === 2) row3 = row3 + char;
//   if (char !== "\n" && count === 3) row4 = row4 + char;
//   //console.log(count, char); //This keeps track of what is going on inside the loop
     
// }

// console.log("end " + count);
// console.log("row 1 " + row1);
// console.log("row 2 " + row2);
// console.log("row 3 " + row3);
// console.log("row 4 " + row4);

let arr = [];
let arr2 = ["a", "b", "c", "d", "e"]

for(i = 0; i < 5; i++){  
    arr.push([arr2[i]])
}

console.log(arr);
//goal [[],[],[],[],[]]