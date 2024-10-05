import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const books = [
    {id: 1, name: 'Bangla', Price: 150},
    {id: 2, name: 'English', Price: 160},
    {id: 3, name: 'Biology', Price: 180},
    {id: 4, name: 'Physics', Price: 150}
  ]



  const actors =['ali', 'shafi', 'ridwan', 'sakib'];
  const singers = [
    {id: 1, name: 'hero alam', age: 18},
    {id: 2, name: 'arfin rumi', age: 28},
    {id: 3, name: 'nobel man', age: 48},
    {id: 4, name: 'dj habu', age: 16}
  ]

  return (
    <>
        <h3>Vite + React</h3>
        <BookStore books={books}></BookStore>


       {
        singers.map(singer => <Singer singer={singer}></Singer>)
       }


        <Actor name={'morshed'}></Actor>
        {
          actors.map(actor => <Actor name={actor}></Actor>)
        }

        {/* <Todo 
            task="Learn React" 
            isDone={true}></Todo>
        <Todo 
            task="Explore Core" 
            isDone={false}></Todo>
        <Todo 
            task="Try JSX" 
            isDone={true}></Todo> */}
        {/* <Person></Person>
        <Student grade="7" score="20"></Student>
        <Student grade="8" score="40"></Student>
        <Student></Student>
        <Developer></Developer>
        <Device name="Laptop" price="12000"></Device>
        <Device name="Mobile" price="5000"></Device>
        <Device name="Pc" price="41000"></Device> */}
    </>
  )
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12};
  return <h3>I am a {person.name} and my age is {age + money}</h3>
}

// const {grade, score} = {grade: '7', score: '41'};
function Student({grade = 1, score = 0}){
  console.log(grade, score)
  return (
    <div className='student'>
        <h3>This is a student</h3>
        <p>Class: {grade}</p>
        <p>Score: {score}</p>
    </div>
  )
}

function Developer(){
  const devStyle ={
    margin: '20px',
    padding: '20px',
    border: '5px solid white',
    borderRadius: '20px',
  }
  return(
    <div style={devStyle}>
      <h1>Dev Hasan</h1>
      <p>Coding</p>
    </div>
  )
}


function Device(props){
  console.log(props)
  return(
    <h2>My Device: {props.name}, price: {props.price}</h2>
  )
}


export default App
