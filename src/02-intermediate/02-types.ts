type Test = "a" | "b" | "c" | "d";
type Test2 = "a" | "z" | "w" | "c";

type Test3 = Test & Test2; // a, c
type Test4 = Test | Test2; // all

type Test5 = {
    a: string,
    b: string,
    c: string
}
type Test6 = {
    z: string,
    w: string,
    a: number
}

type Test7 = Test5 & Test6;
type Test8 = Test5 | Test6;

