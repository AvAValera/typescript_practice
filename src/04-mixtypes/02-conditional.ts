const x = 16;
const checkX = x >= 0 ? "no": "yes";

interface RecString {
    [key: string]: string
}
interface RecData {
    [key: string]: Date
}

type Rec<T> = T extends string ? RecString : RecData;

const obj: Rec<string> ={
    key: "text"
}
const obj2: Rec<number> = {
    date: new Date()
}