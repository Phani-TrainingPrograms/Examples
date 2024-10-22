//useEffect : React hook that tells React DO SOME CODE WHEN (pick one):
//              This component rerenders
//              This component mounts
//              The state of a value changes. 
// useEffect (function, [dependencies])
//1. useEffect(() => {}) //Runs after every rerender
//2. useEffect(() => {}, []) //Runs only on mount
//1. useEffect(() => {}, [value]) //Runs on mount + when value changes
//1. useEffect(() => {}) //Runs after every rerender

//USES:
// #1 Event Listeners
// #2 DOM manipulations
// #3 Subscriptions
// #4 Fetching data from an API
// #5 Clean up when the component unmounts

import React, { useState, useEffect} from 'react'

export default function UseEffectExample() {
    const [count, setCount ] = useState(0)
    const [color, setColor ] = useState("green")
    // useEffect(()=>{
    //     //document.title = count
    // }) //Everytime when the value changes

    useEffect(()=>{
        document.title = `Count: ${count} ${color}`
    }, [count])

    function addCount(){
        setCount(c => c + 1)
    }

    function subtractCount(){
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")   
    }

    return (
    <div>
        <p style={{color : color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button>
     </div>
  )
}
