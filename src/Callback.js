import { useEffect } from "react";
import { useState, useCallback } from "react/cjs/react.development";

function Callback(){
    
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] =useState(0);

    const handleCounter = useCallback(() => setCounter(counter+1), [counter]); 

    const handleTimer = useCallback(() => setTimer(timer+1), [timer]);

    useEffect(()=>{
        handleCounter();
        handleTimer();
    },[])

    console.log("this is callback")
    return (
        <div style={{ height: 200}}>
            { counter}
            { timer}
            <button onClick={handleCounter} >Increase Count</button>
            <button onClick={ handleTimer} >Increase Time</button>
        </div>

    )

}
export default Callback;