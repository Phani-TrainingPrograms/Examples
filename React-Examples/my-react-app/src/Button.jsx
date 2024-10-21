import React from 'react'

export default function Button() {
    let count = 0;
    const handle_click = () => console.log("Ouch");
    const handle_click2 = (name) => console.log(`${name}, please stop clicking me!!!`);
  return (
    <button onClick={() => handle_click2("Phani")} className='button'>Click Me!! </button>
  )
}
