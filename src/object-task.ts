// Создайте интерфейсы User и Admin.

// User должен содержать следующие ключи:

// login, email, password, isOnline, lastVisited
// Admin содержит все те же ключи, плюс ключ role.

// Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.

// Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.

interface User {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
}
interface Admin {
    login: string;
    email: string;
    password: string;
    isOnline: boolean;
    lastVisited: Date;
    role: string;
}

const profileUser: User = {
    login: "user",
    email: "test@test.com",
    password: "123",
    isOnline: true,
    lastVisited: new Date(),
};

const profileAdmin: Admin = {
    login: "admin",
    email: "test@test.com",
    password: "123",
    isOnline: true,
    lastVisited: new Date(2022, 6, 12),
    role: "admin",
};

function login(login: {
    login: string;
    password: string;
    lastVisited: Date;
}): void {
    if (login.login.length > 1 && login.password.length > 1) {
        console.log("Hello ", login.login, login.lastVisited);
    }
}

login(profileUser);
login(profileAdmin);
