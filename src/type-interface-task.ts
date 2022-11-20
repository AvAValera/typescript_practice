// Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:

// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

type Product = {
    price: number;
    isNew: boolean;
    isSale: boolean;
    title: string;
};

type Vehicle = {
    wheels: number;
    year: number;
    brand: string;
};

type Car = {
    type: string;
    model: string;
} & Product &
    Vehicle;

const data: Car = {
    brand: "bmw",
    isNew: true,
    isSale: true,
    model: "700",
    price: 2000,
    title: "sport car",
    type: "sport",
    wheels: 4,
    year: 1990,
};

interface IProduct {
    price: number;
    isNew: boolean;
    isSale: boolean;
    title: string;
}

interface IVehicle {
    wheels: number;
    year: number;
    brand: string;
}

interface ICar extends IProduct, IVehicle{
    type: string;
    model: string;
}

const IData: ICar = {
    brand: "bmw",
    isNew: true,
    isSale: true,
    model: "700",
    price: 2000,
    title: "sport car",
    type: "sport",
    wheels: 4,
    year: 1990,
};
