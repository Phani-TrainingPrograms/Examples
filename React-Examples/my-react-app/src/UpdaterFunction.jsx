//Update function = A function passed as an arg to setState() usually ex.setYear(func as arg)
//Allows for safe updates based on previous sate. 
//Used for multiple state updates and asynchronous functions. 
//Good practise to use updater functions. 
import React, { useState } from 'react'

export default function UpdaterFunction() {
    const [count, setCount] = useState(0)

    function increment(){
        //Takes the PENDING State to calculate the next state. 
        //React places UR updater function in the queue(Waiting in the line)
        //During the next render, it shall call them in the same queue
       setCount(count => count + 1)
       setCount(count => count + 1)
       setCount(count => count + 1)
       //convention: prev or use first letter. c in this case. 
    }

    function decrement(){
        setCount(count - 1)
    }

    function reset(){
        setCount(0)
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
      );
}
