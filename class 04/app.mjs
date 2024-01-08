// console.log("Hello js")
// alert("Hello Haris")
// console.log("Hello js")
// console.log("Hello js")
// console.log("Hello js")

// #id_value
// .class_value

document.querySelector("#container").innerHTML = `
<h1 class='bg-red-300' >Hello saylani</h1>

<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis soluta recusandae inventore dolorum rem ipsum neque aspernatur at. At ipsam quisquam, maxime nisi beatae tempore ex quas illum enim.</p>
`

// document.querySelector(".sub").innerHTML = `
// <h1 class='bg-green-300' >Hello SMIT</h1>
// `

// name = 1
// let name = "Obaid"
// var name = 2
// name = "Hussain"
// const name = "asad"
// name = "hammaad"

// console.log(name);

let name = "Hussain" //String
let age = 20 // Number
let isMarried = true // Boolen
let isChild = false // Boolen ""
let foo = undefined // Undefined
let bar = null // Null
let welcome = "Welcome! "

// let lastname = "";
// console.log(lastname, "this is lastname");
// console.log(Boolean(lastname))

// console.log(welcome + " " + name);
// console.log(welcome + name + " and your age is " + age);
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(7 * 6);
// console.log(4 / 2);
// console.log(10 % 4)

let lastname = "Qasim"
let lastName = "Mehmod"

// console.log(lastname, "this is lastname");
// console.log(lastName, "this is lastName");

// let num1 = 1
// let num2 = 2

// let num3 = num1++
// let num3 = num1 + 1
// console.log(num1, "num1"); // 2
// console.log(num3, "num3"); // 1
// console.log(num1++); // 1
// console.log(num1--); // 2
// console.log(--num1); // 0
// console.log(num1); // 0
// console.log(num3);

// const num1 = +prompt("Enter you num1")
// // +"20" // 20
// console.log(typeof num1);
// console.log(num1);
// const num2 = parseInt(prompt("Enter you num2"))
// console.log(typeof num2);
// const num3 = Number(prompt("Enter you num3"))
// console.log(typeof num3);


// alert(num1 + num2 + num3)

// function sum() {
//     console.log(1 + 1); // 2

// }
// sum()
const writeToBody = () => {
    document.querySelector(".sub").innerHTML = `
    <h1 class='bg-green-300' >Hello SMIT</h1>
    `
}
// writeToBody()

const removeData = () => {
    document.querySelector(".sub").innerHTML = ``
}

console.log(1);
const sum = () => {
    console.log(2);
}
console.log(3);
// sum()


const submitHandler = () => {
    console.log("I am console");
    const number1 = document.querySelector("#num1")
    const numDiv = document.querySelector("#showNumber")
    // number1.innerHTML = "111"
    // console.log(number1.value);
    numDiv.innerHTML += "<h1>" + number1.value + "</h1>"
}
