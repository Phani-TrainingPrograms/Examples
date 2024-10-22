import React, { useState } from 'react'

export default function ArrayState() {
    const [ foods, setFoods ] = useState(["Apple", "Orange", "Banana"])

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""

        // setFoods([newFood])
        setFoods([...foods, newFood])
    }

    function handleRemoveFood(index){
        // setFoods(foods.filter((element, i) =>  i !== index))
        setFoods(foods.filter((_, i) => i != index)) //_ is used to tell that the arg can be ignored
    }
    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}
