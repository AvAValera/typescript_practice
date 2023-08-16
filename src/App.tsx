import "./App.css";
import Todo from "./components/Todo";

function App() {
    return (
        <div style={{width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "50px"
        }}>
            <h1>TODO</h1>
            <Todo/>
        </div>
    );
}

export default App;
