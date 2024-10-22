import React, {useState} from 'react' //OBject destructring to extract individual functions 

export default function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(47);
    const [isEmployed, setIsEmployed] = useState(true);

    const updateName = () => {
        setName("Phaniraj")
        console.log(name);
    }

    const incrementAge = () =>{
        setAge(age + 1)
    }

    const toggleEmployeedStatus = () => {
        debugger;
        !setIsEmployed
    }

  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Name: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is Employeed: {isEmployed ? "yes" :"no"}</p>
        <button onClick={toggleEmployeedStatus}>Toggle status</button>
    </div>
  )
}
