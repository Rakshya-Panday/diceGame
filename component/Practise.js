import { useState } from "react";

const Practise = ()=>{
    const[begin,startbegin] = useState();
    const[last,startlast]  = useState();
    function start(){
        startbegin(begin+1);
    }
    return(
        <>
        <h1>This is a pratise session</h1>
        <button onClick={start}>Start</button>
        <button onClick={()=>startlast(last+2)}>End</button>
        </>
    )
}
export default Practise;