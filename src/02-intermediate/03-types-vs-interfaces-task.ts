// Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:

// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

type Product = {
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string
}
type Vehicle = {
    wheels: number,
    year: Date,
    brand: string
}
type Car = Product & Vehicle & {
    type: string,
    model: string
};


interface IProduct {
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string
}
interface IVehicle {
    wheels: number,
    year: Date,
    brand: string
}
interface ICar extends IProduct, IVehicle{
    type: string,
    model: string
}
