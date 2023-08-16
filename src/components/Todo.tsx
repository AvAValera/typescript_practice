import {useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";



const dataList = [
    {id: Date.now(), title: "by milk", status: true},
    {id: Date.now() + 2, title: "go to work", status: false},
]
export default function Todo() {

    const [todoList, setTodoList] = useState(dataList);

    const delItem = (idItem: number | string): void => {
      const newTodo = todoList.filter((el) => el.id !== idItem )
      setTodoList(newTodo);
    }
    const changeStatus = (idItem: number | string ):void => {
      const newTodo = todoList.map((el) => el.id === idItem ? {...el, status: !el.status}: el)
      setTodoList(newTodo)
    }

    return (
        <div>
            <TodoInput todoList={todoList} setTodoList={setTodoList}/>
            <TodoList todoList={todoList} delItem={delItem} changeStatus={changeStatus}/>
        </div>
    );
}
