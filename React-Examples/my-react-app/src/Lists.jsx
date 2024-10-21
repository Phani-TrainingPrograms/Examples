import React from 'react'
import PropTypes from 'prop-types'
export default function Lists(props) {
    //const fruits = [{id : 1, name: "Apples", calories: 95}, {id : 2, name: "Oranges", calories: 75}, {id : 3, name: "bananas", calories: 115}, {id : 4, name: "Coconuts", calories: 165}]
    //next example should cut the above list and paste it into app and pass it as props. 

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETIC SORTING
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE
    //fruits.sort((a, b) => a.calories - b.calories); //NUMERIC SORTING.

    //const lowCalFruit = fruits.filter(f => f.calories < 100);
    //const highCalFruit = fruits.filter(f => f.calories >= 100);
    const cat = props.category
    const itemList = props.items;

    // const listItems = fruits.map(f => <li key={f.id}>{f.name} : &nbsp;<b>{f.calories}</b></li>)
    const listItems = itemList.map(f => <li key={f.id}>{f.name} : &nbsp;<b>{f.calories}</b></li>)
  return (
  <>
    <h2 className='list-category'>Categories: {cat}</h2>
    <ul className='list-item'>{listItems}</ul>
  </>
  )
}
//For PropTypes of objects. 
Lists.proTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string,
        calories : PropTypes.number
    }))
}
//append this component with default as exercise. 