// Дан union-тип Level с уровнями позиция для разработчиков. Он же назначен для интерфейса Developer.

// Необходимо создать функцию gradeDeveloper, которая будет принимать объект пользователя с ключом level и новый уровень.
//  В теле функции для полученного объекта должен назначаться следующий уровень.

type Level = "junior" | "middle" | "senior";
type Stack = "Php" | "Node" | "Java" | "C#";
enum Login {
    Usr = "User",
    Hum = "Human",
    Wel = "Well"
}

export interface Developer {
    login: Login;
    skills: Stack[];
    level: Level;
}

// create a function that change level of incoming developer
function gradeDeveloper(developer: Developer, level: Level): void {
    developer.level = level;
    console.log(developer);
}

gradeDeveloper({login: Login.Hum, skills:["Java","Node", "Php"], level:"junior"}, "middle");