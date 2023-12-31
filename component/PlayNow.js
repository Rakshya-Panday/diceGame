import { useState } from 'react';
import '../css/playnow.css';
import Rules from './Rules';
const PlayNow = ()=>{
    const arr = [1,2,3,4,5,6];
    const[selectnum,setselectnum] = useState();
    const[currentDice,setCurrentDice] = useState(1);
    const[score,setScore] = useState(0);
    const[error,setError] = useState("");
    const[visible,setVisible] = useState(false);
    const generateRandomNumber = (min,max) => {
        console.log( Math.floor( Math.random() * (max - min) + min));
        return Math.floor( Math.random() * (max - min) + min);

    };
    const roleDice = ()=>{
        if(!selectnum){
            setError("You have not select any number")
            return;
        } 
        setError("")
       const randomNumber  = generateRandomNumber(1,7);
        setCurrentDice((prev) =>randomNumber)
        
        if(selectnum ==randomNumber)
        {
            setScore((prev) =>prev+randomNumber);

        }
        else{
            setScore((prev) =>prev-2)

        }
       setselectnum(undefined);
      
    }

    const resetDice =()=>{
        setScore("0");
    }

    const showRules = ()=>{
        setVisible()
    }


    
    return(
        <> 
        <div className="head">
           <div className='heading'>
          <h1>{score}</h1>
            <p>Total Score</p>
           </div>
         <div className='second'>
          <p className='error'>{error}</p>  
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
         <div className='dice2'  onClick = {roleDice}>
           
            <img src={`dices/dice_${currentDice}.png `} alt='dice1'/>
            <p>Click on dice to roll</p>
         <button onClick={resetDice}>Reset Score</button>
         <button  onClick={()=>setVisible((prev)=>!prev)}>
            {
                visible ? "Hide":"Show"
            }
            Show Rules</button> 
          { visible &&  <Rules/>}
         </div>
         
        </>
    )
}
export default PlayNow;