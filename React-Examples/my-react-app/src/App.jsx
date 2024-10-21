import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Button from './Button'
import UserGreeting from './UserGreeting'
import Lists from './Lists'
function App() {
  const fruits = [{id : 1, name: "Apples", calories: 95}, {id : 2, name: "Oranges", calories: 75}, {id : 3, name: "bananas", calories: 115}, {id : 4, name: "Coconuts", calories: 165}]
  const vegetables = [{id : 6, name: "Carrots", calories: 25}, {id : 7, name: "Corns", calories: 65}, {id : 8, name: "Potatoes", calories: 115}, {id : 9, name: "Brocoli", calories: 165}]
  return (
    <>
      <h1>Hello world!!!</h1>
      <Header/>
      {/* <Food/>
      <Card name="Phaniraj" age="30" isStudent={true}/>
      <Card name="Patrick" age={42} isStudent={true}/>
      <Card name="Joe Garner" age={40} isStudent={false}/>
      <Card name="Mark Zule" age={37} isStudent={false}/>
      <Card name="Rob Corner" age={37} isStudent={true}/>
      <Card name="Larry"/>
      <Button/> 
      <UserGreeting isLoggedIn={true} username="Phani"/>
      <UserGreeting/>
      
      <Lists items={fruits} category="fruits"/>
      <Lists items={vegetables} category="vegetables"/>

      {fruits.length > 0 ? <Lists items={fruits} category="fruits"/> : none}
      {vegetables.length > 0 ? <Lists items={vegetables} category="vegetables"/> : none}


      {fruits.length > 0 && <Lists items={fruits} category="fruits"/>}
      {vegetables.length > 0 && <Lists items={vegetables} category="vegetables"/>}*/}
      <Button/>
      <Footer/>
    </>
  )
}

export default App
