function receivesAFunction(func) {
    func();
    return func;
}

function returnsANamedFunction() {
    return function cbh() {
        console.log('called function return')
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('anonymous function');
    }
}