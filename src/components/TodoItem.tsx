import {CSSProperties } from "react";
interface PropsTodo {
  status: boolean,
  title: string,
  id: string | number,
  delItem: (id:string | number) => void,
  changeStatus: (id:string | number) => void,
}

export default function TodoItem({status, title, id, delItem, changeStatus}: PropsTodo) {

const btnStyle: CSSProperties = {
    color: "red",
    fontWeight: "bold",
    background: "none",
    border: "none",
    cursor: "pointer"
}




return (
    <li style={{display: "flex", gap: "5px", marginBottom: "10px"}}>
      <input onChange={() => changeStatus(id)} type="checkbox" defaultChecked={status}/>
      <div style={{textDecoration: status ? "line-through": "none"}}>
        {title}
      </div>
      <button onClick={() => delItem(id)} style={btnStyle}>delete</button>
    </li>
  );
}
