import { useState } from 'react';
import '../css/playnow.css';
const PlayNow = ()=>{
    const arr = [1,2,3,4,5,6,7];
    const[selectnum,setselectnum] = useState();
    
    return(
        <> 
        <div className="head">
           <div className='heading'>
          <h1>0</h1>
            <p>Total Score</p>
           </div>
         <div className='second'>
            
         {arr.map((element,index)=>{
             return(
                <box
                isSelect = {element == selectnum}
                key ={index} onClick = { () => setselectnum(element)}
                > {element}</box>
             )
            })}
            <p>Select Number</p>
         </div>
            

        </div>
        </>
    )
}
export default PlayNow;