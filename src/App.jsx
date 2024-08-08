
import "./App.css";
import AddTodos from "./components/AddTodos";
import Counter from "./components/counter";
import Todos from "./components/Todos";

function App() {


  return (
    <>
      <h1>learn about redux toolkit</h1>
      <AddTodos/>
      <Todos/>
      <hr />
      <Counter/>
    </>
  );
}

export default App;
