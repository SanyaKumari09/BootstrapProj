import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddTasks from "./components/AddTasks";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="tasks-container">
        <AddTasks />
      </div>
      
    </center>
  );
}

export default App;
