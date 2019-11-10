function sum(a,b){
    return a +b;
}

console.log("MODULE.EXPORT (before): ", module.exports);

module.exports = {
    sum
}

console.log("MODULE.EXPORT (after): ", module.exports);