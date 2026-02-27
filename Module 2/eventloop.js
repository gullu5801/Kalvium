console.log("hii");
console.log("HII");
let sevensec = setTimeout(() =>
    console.log("after 5 sec"), 7000
)
console.log("js dont stop");

function add(a, b) {
    console.log(a + b)
}

setTimeout(add, 2000, 8, 2);

setTimeout(() => {
    add(8, 3)
}, 5000)

clearTimeout(sevensec);



// function count(co){
//     this.co = co;
//     co = ++co
//     console.log(co)
// }
let count = 0;
let fftSec = setInterval(() => {
    console.log(count++)
    add(1,count)
    if (count == 15) {
        clearInterval(fftSec)
    }
}, 1000)


