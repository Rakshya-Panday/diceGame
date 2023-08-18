
//import './App.css';

import { useState } from "react";
import StartGame from "./component/StartGame";
import PlayNow from "./component/PlayNow";

function App() {
  const[start,setStart]  = useState(true);
  const play = ()=>{
    setStart((prev)=>!prev)
  }
  return (
   <>
     {
      start ?<PlayNow/>:<StartGame togle = {play}/>
     }
   </>
  );
}

export default App;
