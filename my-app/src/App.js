import {useState} from "react";
import './App.css';
import Pin from "./Components/Pin";
function App() {
  const[pinValue,setPinValue]=useState("")
  return (
    <div className="App">
     <Pin length={5} maxLength={1} setPin={setPinValue}/>
     OTP is {pinValue}
    
    </div>
  );
}
export default App;