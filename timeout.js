function doSomething() {
    console.log('ami javascript kortesi');
}
console.log('first: ami sobar age');
// doSomething();
// setTimeout(doSomething, 5000); //eikhane 5000ms (milisecond)
setTimeout(function () {
    console.log('i am using 5s setTimeout');
}, 5000);
setTimeout(() => {
    console.log('i am using 4s settimeout');
}, 4000);
console.log('second: ami second ');
console.log('third: ami third');