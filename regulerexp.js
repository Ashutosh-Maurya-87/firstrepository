console.log('hello to the reguler expression');

let reg=/Ashu/g;//g is a global flag
reg=/ashu/i;// i is also global flag but it means case insenstivity........
console.log(reg);
console.log(reg.source);
let s='this is great code with AShu and also Ashu';
console.log(s);
// function to match expression--------------------------------


// 1. exec()-->  this is function return an array for match or null for no match --------------------------------
let result = reg.exec(s);
console.log(result);
result=reg.exec(s);
console.log(result);
//we can use multiple exec() function with global flag--------------------------------


//2. test()--> this function return true or false--------------------------------
if(result){
    console.log(result);
    console.log(result.input);
    console.log(result.index)
}
let result2=reg.test(s);
console.log(result2);

//-3 match()-->  it will return an array of result or null

//let result3=reg.match(s); it write in wrong way-----------------
let result3=s.match(reg);
console.log(result3+ ' match');

// 4 .search()-->  this return index of first match else return -1------
//let result4=reg.search(s);//this is wrong way to written this function----------
let result4=s.search(reg);
console.log(result4+ ' ashu yarr');
// 5. replace()-->  this replace the 
let result5=s.replace(reg,'Ankit');
console.log(result5)