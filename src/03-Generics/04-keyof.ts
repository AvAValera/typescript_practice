type WindowProp = keyof Window;
const val1: WindowProp = "alert";

type Pc = {
    brand: string,
    year: number,
    power: number,
    isNew: boolean
}

const val2: keyof Pc = "isNew";