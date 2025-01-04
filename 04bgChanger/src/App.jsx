import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

// function changecolor(color){ this function can also be used to change the color
// setColor(color)
// }

  return (
   <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button 
        onClick={()=> setColor('red')}//for changing the background
        //onClick={()=> setColor('red')}// this can also be used to change the background-color using a function

           className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:'red'}}//for button's background
           >Red</button>
         <button 
         onClick={()=> setColor('green')}//for changing background-color
          //onClick={()=> setColor('red')}// this can also be used to change the background-color using a function

           className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:'green'}}//for button's background
           >Green</button>   
        
      </div>
    </div>
   </div>
  )
}

export default App
