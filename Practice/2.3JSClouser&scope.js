//global scope
let a = 10


//function scoped
let fs = function(){
    let a = 30
    console.log(a)
}
fs()
//block scoped
{
    let a =20
    const b = 20
    console.log(a)
}
console.log(a)

//clousers can access the values even if the function call has ended
function ae(){
    let a = 0
    return function b(){
        a++
    }
    b();
}
ae()
let z = ae()
console.log(z)

//lexical scoping