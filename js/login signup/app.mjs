const name = document.querySelector("#name")
const email = document.querySelector("#email")
const pass = document.querySelector("#pass")
const login_email = document.querySelector("#login_email")
const login_pass = document.querySelector("#login_pass")


const users = []

const signupHandler = () => {
    const user = {
        name: name.value,
        email: email.value,
        pass: pass.value
    }
    console.log(user);
    users.push(user)
    console.log(users);

}
window.signupHandler = signupHandler

// const loginHandler = () => {
//     const user_email = login_email.value
//     const user_pass = login_pass.value

//     console.log(user_email, user_pass);
//     let isUserFound = false
//     for (const user of users) {
//         console.log(user);
//         if (user.email === user_email) {
//             alert(`Welcome ${user.name}`)
//             isUserFound = true
//             break
//         }
//     }
//     if (isUserFound === false) {
//         alert("User not found")
//     }
// }

const loginHandler = () => {
    const user_email = login_email.value
    const user_pass = login_pass.value

    console.log(user_email, user_pass);
    const isUser = users.find((user) => {
        if (user.email === user_email) {
            return true
        }
    })
    console.log(isUser);
    if (isUser) {
        alert(`welcome ${isUser.name}`)
    }else{
        alert("User not found")
    }
}

window.loginHandler = loginHandler