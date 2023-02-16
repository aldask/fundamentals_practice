let a = undefined;
let b = null;
let c = 0;
let d = 5;

console.log(a || b || c || d);//5
console.log(a ?? b ?? c ?? d);//0