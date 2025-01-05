    import { useState, useCallback ,useEffect,useRef} from 'react'
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    import './App.css'

    function App() {
      const [length, setLength] = useState(8)
      const[numberAllowed,setNumberAllowed]=useState(false)
      const[charAllowed,setCharAllowed]=useState(false)
      const [password,setPassword]=useState('')
      const passwordRef = useRef(null)//use to grab anything from windows e.g to find how many times the page was loaded
      


      const generatePassword = useCallback(()=>{
        let pass = "" // Initialize the password as an empty string
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numberAllowed) str += "0123456789"   // Add numbers if allowed
        if (charAllowed) str += "!@#$%^&*()_+"    // Add special characters if allowed

        for (let i = 1; i <length; i++) {  //length is comming from state  const [length, setLength] = useState(8)
         const char = Math.floor(Math.random( ) * str.length + 1 )// Random index from the string// takes a random no and selects that no(index) from the string 
        pass +=str.charAt(char)   // Add the character at the random index to the password  //used to find a character at a particular position "char" is acting as a index
        }
        setPassword(pass) // Update the password state

      },[length, numberAllowed,charAllowed]) //dependency array of callback(part of syntax to show dependencies)
                                            //these dependencies dont change too frequently 
                                            //if the change frequently code will give error 
                                            // Dependencies: Re-run this if any of these values change
 
  useEffect(()=>{ //code inside useEffect runs automatically when the page reloads also 
                 //if u pass nothing inside it ,it still runs atleast one time

     generatePassword()            

  },[length, numberAllowed,charAllowed])  //if any of these dependencies change run this function again                                         

const copyPasswordToClipboard =() =>{
  window.navigator.clipboard.writeText(password) //grabs the password text- clipboard
  passwordRef.current?.select()//selects all the characters on the clipboard
  // passwordRef.current?.setSelectionRange(0,4) selects the first 4 characters
}



      return (
    <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>   
      {/* 1st div for heading */}
        <h1 className='text-3xl font-bold mb-2 
        text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden
        mb-4'>
          <input 
          ref={passwordRef}
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly

          />

    <button
    onClick={copyPasswordToClipboard}
        className='outline-none
        bg-blue-700 text-white px-3 
        py-0.5 shrink-0'
        >copy</button>
    </div>
      {/* 2nd div for holding the input box and copy button */}
      <div
      className='flex text-sm gap-x-2'
      >
      <div className='flex-items-center gap-x-1'>
        <input
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> setLength(e.target.value)} //setLenght regulate how u can enter data into the length 
        name="" 
        id=""
          />

          <label htmlFor="length ">Length : {length}</label>

      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)//whatever the prev value was it reverses it i.e.,true->false
        }}
        name="" 
        id="" />
        <label htmlFor="number">Numbers</label>

        </div>
       <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        onChange={()=>{
          setCharAllowed((prev)=>!prev)//whatever the prev value was it reverses it i.e.,true->false
        }}
        name="" 
        id="" />
        <label htmlFor="charInput">Character</label>

        </div>
  
    </div>
    
 </div>


      )
    }

    export default App
