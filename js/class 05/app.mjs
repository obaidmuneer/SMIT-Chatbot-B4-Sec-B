const clickHandler = () => {
    console.log("Hello function")
}
window.clickHandler = clickHandler

// console.log(clickHandler());
const name = "obaid"
let num = 1
// console.log(num++);
// console.log(num);
// console.log(++num);
// console.log(num);
// console.log(name);

// let x = 1
// let y = 1

const doSum = (num1, num2) => { // parameters
    // let x = 2
    // let y = 3
    // return x + y
    return num1 + num2
}
// const total = doSum(9, 3) // arguments
// console.log(total);

// const nums = [1, 2, 3, 4, 5, 9]
//            0, 1, 2, 3, 4, 5
// console.log(nums.length);
// console.log(nums.length);
// console.log(nums);
// console.log(typeof nums);
// nums.push(7)
// console.log(nums);
// console.log(nums[2]);
// console.log(nums.slice(2));
// console.log(nums.splice(2, 1));
// console.log(nums);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

let z = 1
// console.log(z === 1);
// console.log(z !== 1);
// console.log(z > 1);
// console.log(z >= 2);
// console.log(z < 1);
// console.log(z <= 0);
// let isBulbOn = true

// ==
// ===

// if (isBulbOn) {
//     console.log("Bulb is on");
// } else {
//     console.log("Bulb is off");
// }


const nums = ["asad", "wasim", "qasim"] // 6

// for (let i = 0; i < nums.length; i++) {
//     console.log(i);
//     console.log(nums[i]);
// }

// nums.map((n, i) => {
//     console.log(i);
//     console.log(n);
// })

const bulbElement = document.querySelector(".bulb")
let isBulbOn = false
const bulbHandler = () => {
    if (isBulbOn) {
        bulbElement.innerHTML = "bulb is off"
        isBulbOn = false
    } else {
        bulbElement.innerHTML = "bulb is on"
        isBulbOn = true
    }
}
window.bulbHandler = bulbHandler


const minAge = 12
const maxAge = 24
const fullName = "Asad"
const age = 12

// if (age >= minAge && age <= maxAge) {
//     console.log("welcom " + fullName);
// } else {
//     console.log("Your are not welcome");
// }

if (age === minAge || age === maxAge) {
    console.log("welcom " + fullName);
} else {
    console.log("Your are not welcome");
}

const data = 5
const updatedData = `this is data ${data}`
console.log(updatedData);