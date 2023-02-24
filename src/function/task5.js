
function argReturn (num){
    return function () {
        console.log(num);
        return num;
    };
}


const newArgReturn = argReturn(55632);
const newRes = newArgReturn();