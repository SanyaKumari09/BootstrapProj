import MyHead from "./components/title";
import MyBody from "./components/body";
import MyTime from "./components/time";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

function App() {
  return (
    <center>
      <MyHead />,
      <MyBody />
      <MyTime />
    </center>
  );
}

export default App;
