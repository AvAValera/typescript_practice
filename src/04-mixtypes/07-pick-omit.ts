export {};

type Brands = "apple" | "samsung" | "hp";

type BrandsNum = Record<Brands, number>;

const br: BrandsNum = {
    apple: 1,
    samsung: 2,
    hp: 3
}
type Todo = {
    id: string | number,
    title: string,
    description : string,
    isCompleted: boolean,
    createAt: Date
}

type newTodo = Pick<Todo, "title" | "description">

type simpleTodo = Omit<Todo, "createAt" | "isCompleted">