export interface Car  {
    wheels: number,
    brand: string,
    type: string,
    isNew?: boolean,
    name?: string,
    [key: string]: unknown
}



const car: Car = {
    wheels: 4,
    brand : "BMW",
    type: "Sedan",
}
const car2 : Car = {
    brand: "Mercedes",
    wheels: 4,
    type: "Universal",
    isNew: true
}
car2.go = true;