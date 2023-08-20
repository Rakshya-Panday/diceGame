import { useState } from 'react';
import '../css/playnow.css';
const PlayNow = ()=>{
    const arr = [1,2,3,4,5,6,7];
    const[selectnum,setselectnum] = useState();
    const[currentDice,setCurrentDice] = useState();
    const generateRandomNumber = (min,max) => {
        return Math.floor( Math.random() * (max - min) + min);

    };

    
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
         <div className='dice2'  onClick = {()=>generateRandomNumber(1,6)}>
           
            <img src='dice2.jpg' alt='dice2'/>
            <p>Click on dice to roll</p>
         <button>Reset Score</button>
         <button>Show Rules</button> 
         </div>
         
        </>
    )
}
export default PlayNow;