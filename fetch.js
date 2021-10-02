console.log(11111);
console.log(2222);
// setTimeout(() => {console.log(9999) },5000); //eita async hisebe kaj kore 
// fetch async hisebe kaj kore 
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(3333);
console.log(5555);
console.log(1666);
for (let i = 0; i < 1000; i++) {
    console.log(i);
}