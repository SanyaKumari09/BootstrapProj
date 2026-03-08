import {KgButton} from "./KgButton";
import Hello from "./Hello";
import Random from "./Random";

function App(){
  return <div>
    <h1>
   This is hello,  Hello
  </h1>
  {/* <Hello></Hello> */}
  <Hello/>
  <Random></Random>
  <Random></Random>
  <Random></Random>
  </div>
}

// If you want to use this function outside this app we have export it.
export default App; 