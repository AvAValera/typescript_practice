function plus(): string;
function plus(a: number, b: number): number;
function plus(a: number, b: number, c: string): number | string;
function plus(a?: number, b?: number, c?: string | number) {
    if (!a && !b && !c) {
        console.log("no argument");
        return "";
    } else if (a && b && c && typeof c === "string") {
        console.log(a + b + " " + c);

        return a + b + " " + c;
    } else if (a && b && c && typeof c === "number") {
        console.log(a + b + c);
        return a + b + c;
    } else if (a && b) {
        console.log(a + b);
        return a + b;
    }
}

interface Man  {
    name: string;
    age?: number;
};

function check(man: Man): boolean {
    if (typeof man.age === "number") return true;
    else return false;
}

function info(man: Man): void {
    if(check(man)){
        console.log(man.name, man.age);
    }
}

info({name: "Well", age: 30})