import { useState } from 'react'

import './App.css'

function App() {

  const [counter,setCounter]=useState(15) //[variable,Function]
 // let counter = 15

 const addValue=()=>{
 setCounter((prevCounter)=>prevCounter + 1)//callback is used to access the previous value 
 setCounter((prevCounter)=>prevCounter + 1)//it takes the previous value and adds it with 1
 setCounter((prevCounter)=>prevCounter + 1)
 setCounter((prevCounter)=>prevCounter + 1)
 }

 const removeValue = ()=>{
  setCounter(counter - 1)
 }


  return (
    <>
     <h1>React course with Hitesh {counter}</h1>
     <h2> Counter Value:{counter} </h2>
     <button
     onClick={addValue}
     >Add value</button> {" "}
     <button onClick={removeValue}>remove value</button>
     <p> footer:{counter}</p>
    </>
  )
}

export default App
