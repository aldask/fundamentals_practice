let fn = (...args) => {
    let count = 0;
    for (let i = 0; i < args.length; i++){
        if(args[i].indexOf(" ") >= 0){
            count++;
        }
    }
    return count;
}

console.log(fn("dev Mentor", "devMentor", " "));
console.log(fn("a", "b", "c", "d", "e", "f"));