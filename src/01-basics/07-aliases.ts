type Pair = [string | number, number];

const arrPair : Pair = ["text", 3];

type Pairs = Pair[];

const arrPair2 : Pairs = [["text", 3]]

type anotherPair = {
    name: string,
    age: number,
    tel?: string
}