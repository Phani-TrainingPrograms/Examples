import React, { useState } from 'react'

export default function ObjectUpdate() {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    });

    function handleYearChange(event) {
        setCar(c => ({year : 2024, make : "Ford", model : "Ustang", year : event.target.value}))
        //In js, if we have 2 properties with the same name, U end up using the later one. Instead its good to use the spread operator that spreads the attributes of the car object and U shall add the year to it which is more like an update. 
        //Arrow functions assumes {} as block statement, so if U want one line statement for creating an object, U should cover it with (). 
        //setCar(c => ({ ...c, year: event.target.value }));
    }
    function handleMakeChange(event) {

        setCar(c => ({ ...c, make: event.target.value }));
    }
    function handleModelChange(event) {

        setCar(c => ({ ...c, model: event.target.value }));
    }

  return (
    <div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
                
                <input type="number" value={car.year} onChange={handleYearChange}/><br/>
                <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
                <input type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>);
}
