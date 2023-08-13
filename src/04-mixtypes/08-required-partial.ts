export {};

type Todo = {
    id: string | number,
    title: string,
    description? : string,
    isCompleted: boolean,
    createAt: Date
}

type ReadOnlyTodo = Readonly<Todo>
type PartialTodo = Partial<Todo>
type RequiredTodo = Required<Todo>