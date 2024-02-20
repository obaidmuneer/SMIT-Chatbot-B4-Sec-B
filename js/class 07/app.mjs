const student_1 = {
    name: "obaid",
    roll: 123,
    courses: ["web n mobile", "chatbot"]
}

const student_2 = {
    name: "Asad",
    roll: 456,
    courses: ["web n mobile"]
}

const student_3 = {
    name: "Hussain",
    roll: 789,
    courses: ["chatbot"],
    attend: function () {
        console.log(this);
        // console.log(student_3.name);
    }
}
// this
const students = [student_1, student_2, student_3]

// console.log(student_3.courses);
// student_3.courses.push("ai")
// console.log(student_3.courses);

const n = "name"

// console.log(student_3[n]);
// delete student_3.name
// console.log(student_3);
// console.log("name" in student_3);
// console.log(student_3.hasOwnProperty("namee"));
// console.log(student_3.lastName);

// student_3.attend()

class Kind {
    constructor(kind) {
        this.kind = kind
    }
}


class User extends Kind {
    #name
    constructor(name, age, kind) {
        super(kind)
        this.#name = name
        this.age = age
    }
    sayName = () => console.log("my name is ", this.#name);
    getName = () => this.#name
    setName = (updatedName) => {
        this.#name = updatedName
    }
}

// const user_1 = new User("obiad", 24, "123")
// console.log(user_1.getName());
// user_1.setName("hussain")
// console.log(user_1.getName());
// console.log(user_1.kind);
// user_1.sayName()

import doMultiple, { doSum, doMinus } from './calc.mjs'
// // import doMultiple from './calc.mjs'

// const sumValue = doMultiple(9, 6)
// console.log(sumValue);
// console.log(doSum(2,6));
// console.log(doMinus(9,2));
