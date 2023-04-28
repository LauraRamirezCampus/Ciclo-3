const myRe = /^\+(57)(60[1-8])(\d{7})$/g;
let myArray = myRe.exec('+576076363636');
for (let exp of myArray) {
    console.log(exp);
}
