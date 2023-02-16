const course = "Fundamentals";
let count = 0;

for (let i = 0; i < course.length; i++){
    split = course[i];
    if (split === "a"){
        count++;
    }
}
console.log(count);