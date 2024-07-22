import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Rohit",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
       <Card  username = "chaiaurcode"  btnText = "Click me" />
       <Card username="Rohit" btnText = "Visit Me"/>
    </>
  )
}

export default App
