
function binaryFn (a, b) {
    return a * b;
}

function fn (a, b, binaryFn) {
    binaryFn(a, b);    
}

fn(3, 8);