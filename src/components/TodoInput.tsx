import React, {useRef} from "react";

export interface ListTodo {
    id?: string | number | Date,
    title: string,
    status: boolean,
}


type propsTodo = {
    setTodoList: React.Dispatch<React.SetStateAction<any>>,
    todoList: ListTodo[]
}

export default function TodoInput({setTodoList, todoList}: propsTodo) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const addTodo = (): any => {
        if (inputRef.current) {
            setTodoList([...todoList, {id: Date.now(), title: inputRef.current.value, status: false}]);
            inputRef.current.value = " "
        }
    }

    const handlerKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter"){
            addTodo()
        }
    }

    return (
        <div>
            <input onKeyDown={handlerKeyPress} ref={inputRef} type="text" placeholder="Add Todo"/>
            <button onClick={addTodo}>SEND</button>
        </div>

    );
}
