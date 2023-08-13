// Создайте интерфейсы User и Admin.
//
//     User должен содержать следующие ключи:
//
//     login, email, password, isOnline, lastVisited
// Admin содержит все те же ключи, плюс ключ role.
//
//
//
//     Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.
//
//     Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.

interface User {
    login: string,
    password: string,
    isOnline: boolean,
    email: string,
    lastVisited: Date,
}
interface Admin {
    login: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date,
    role: string,
    email: string
}

function login(user: {login: string, password: string, lastVisited: Date}): void {
    if (user.login.length > 1 && user.password.length > 1){
        console.log(`Hello ${user.login.toUpperCase()} Last Visited ${user.lastVisited}`);
    }
    else {
        console.log("Not Login");
    }
}

const user1:User = {
    login: "user1",
    isOnline: true,
    lastVisited: new Date(2000, 5, 12),
    password: "qwerty",
    email: "text@test.com"
}
const admin1:Admin = {
    login: "admin1",
    isOnline: true,
    lastVisited: new Date(),
    password: "qwerty",
    email: "text@test.com",
    role: "admin"
}

login(user1)
login(admin1)