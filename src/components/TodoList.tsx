import TodoItem from "./TodoItem";

interface Todo {
  id: number,
  title: string,
  status: boolean,
}

interface Props {
  todoList: Todo[],
  delItem: (itemId: string | number) => void,
  changeStatus: (itemId: string | number) => void,
}


export default function TodoList ({todoList, delItem, changeStatus}: Props) {

  return (
    <ul>
      {
        todoList.length >= 1 && todoList.map((el:Todo, i: number) => <TodoItem key={i} {...el} delItem={delItem} changeStatus={changeStatus}/>)
      }
    </ul>
  );
}
