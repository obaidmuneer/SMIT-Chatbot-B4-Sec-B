const list = document.querySelector(".list")
const items = ["asad", "wasim", "qasim"] // 6

// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
//     list.innerHTML += `<p>${items[i]}</p>`
// }

let i = 0
// for(let item of items ){
//     console.log(item);
//     list.innerHTML += `<p>${item}</p>`
//     console.log(i);
//     i++
// }


// const items_2 = items.forEach((item,i) => {
//     console.log(item,i);
//     list.innerHTML += `<p>${item}</p>`
//     if(item === "asad"){
//         return 0
//     }else{
//         return 1
//     }
//     // return item
// })

// const items_2 = items.find((item, i) => {
//     if (item === "asad") {
//         return true
//     }

// })
// console.log(items_2);

const myFunc = (num1, num2) => num1 + num2

// const myFunc = (num1,num2) => {
//     return num1+num2
// }
// const _d = myFunc(1,2)
// console.log(_d);

// const name = "asad"

// const d = name === "obaid" ? "welcome" : ""
// console.log(d);

// if ([] == true) {
//     console.log("[] is loosely equal to false");
// }



// const items_2 = items.find(item => item === "asad")
// const items_2 = items.filter(item => item === "asad")
// console.log(items_2);


// const items_2 = items.map((item,i) => {
//     // console.log(item,i);
//     list.innerHTML += `<p>${item}</p>`
//     if(item === "asad"){

//     }else{
//         return 1
//     }
//     // return item
// })

// const items_2 = items.filter((item, i) => i > 1)

// console.log(items_2);



// for(let item of items ){
//     if(item == "wasim") continue
//     console.log(item);
// }

// == / ===
// != / !==
// > / >=
// < / <=
// ||
// &&

const age = 15
// const isWelcome = (age >= 20 || age === 13 ) ? "welcome" : "not welcome"
// const isWelcome = (age >= 13 && age < 20) ? "welcome" : "not welcome"
// console.log(isWelcome);



// const obj = {
//     class: "Obaid",
//     items:[]
// }
// obj.name = "Qasim"
// console.log(obj.name);
// obj.items.push("123")
// console.log(obj);

let classes = []

const input_value = document.querySelector(".class")
const render_list = document.querySelector(".list")

const fetchDb = () => {
    const data = localStorage.getItem("list") || "[]"
    // console.log(typeof data);
    // console.log(data);
    const parsedData = JSON.parse(data)
    // console.log(typeof parsedData);
    // console.log(parsedData);
    return parsedData
}

window.renderItems = () => {
    classes = fetchDb()
    render_list.innerHTML = ""
    classes.map((item) => {
        render_list.innerHTML += item + "<br>"
    })
}

window.addHandler = () => {
    classes.push(input_value.value)
    localStorage.setItem("list", JSON.stringify(classes))
    input_value.value = ""
    renderItems()
}

renderItems()

