let fn = () => () => 'Short function';

fn()();

let fn2 = (p) => console.log(p());

fn2(fn());