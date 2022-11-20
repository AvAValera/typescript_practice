interface Person {
    readonly name: string;
    age: number;
    telephone: string;
    email?: string;
}

interface Developer {
    stack: "Front" | "Back";
    readonly lastWork: string;
    readonly experience: number;
    rang: "junior" | "middle" | "senior";
}

interface Vacancy extends Person, Developer {
    pay: number;
    ["work-time"]: number;
}

const worker: Vacancy = {
    "work-time": 8,
    age: 30,
    experience: 3,
    lastWork: "company",
    name: "Well",
    pay: 2500,
    rang: "middle",
    stack: "Front",
    telephone: "333333-33-33",
    email: "some@mail",
};

type List = {
    arr: string | number
}

interface IList {
    arr: string | number
}