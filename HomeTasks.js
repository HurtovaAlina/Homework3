//======Task 1 ===============

let summ = 0;
let array = [2,3,4,5];
console.log(array);
for(let i=0; i<array.length;i++){
summ = summ+array[i];
};
console.log("Sum of array elements = ", summ);

let summ1 = 0;
let array1 = [2,3,4,5];
console.log(array1);

let i=0;
while (i<array1.length) {
summ1 = summ1+array1[i];
i++;
}
console.log("Sum of array elements = ", summ1);


//======Task 2 ===============

let array2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let a;
for (a of array2) {
if ((a%2==0)||(a==0)){
console.log(String(a)+ " is even");
} else {
console.log(String(a)+ " is odd");
};
};

//======Task 3 ===============

let min = 1;
let max =500;
function randomInt(min,max){
min = Math.ceil(min);
max =Math.floor(max);

return Math.floor(Math.random()*(max-min+1))+min};

let array =[];
function randArray(k){
for (let i=0; i<k; i++){
array[i]=randomInt(min,max);
console.log(array[i]);
};
};

let k = Number(prompt("Enter amount of elements ", "amount"));
randArray(k);

//======Task 4 ===============

let a;
let b;
function raiseToDegree(a,b){
let d= a**b;
return d;
};
a = parseInt(prompt("Enter a value ", "a"));
b = parseInt(prompt("Enter b value ", "b"));
console.log(raiseToDegree(a,b));

//======Task 5 ===============

function minimum() {
let min= arguments[0];
for (let i = 0; i<arguments.length; i++) {
if (min>arguments[i]){
min = arguments[i];
};
};
console.log(min);
}
minimum(-2,5,0,-20);

//======Task 6 ===============

function findUnique(array) {
unique = true;
for (let i=0;i<array.length; i++){
for (let j=i+1; j<array.length;j++){
if (array[i]==array[j]){
unique = false};
};
};
};
let unique;
let array=[1,9,3,4,9];
findUnique(array);
console.log(unique);

//======Task 7 ===============

function lastElement(array, k) {
    let last = array.length-1;
    if (k==null){
     newArray = (array.pop());
    } 
    else if (k>array.length){
    newArray = array
    } 
    else for (let i = (last); i>=(array.length-k); i--) {
    newArray.unshift(array[i]);
    };
    };
    
    let array = [];
    let k;
    let newArray=[];
    lastElement([3,2,-3,0,4.2,7,99] );
    console.log(newArray);
    

//======Task 8 ===============

function string() {
let string = "i love java script";
let splitString = string.split(" ");
let result = "";
for (let i = 0; i <splitString.length; i++) {
let a = splitString[i];
let First = a.substring(0, 1).toUpperCase();
let Leftovers = a.substring(1, a.length)
result+= First + Leftovers + " ";;
}
console.log(result)
}
string();
