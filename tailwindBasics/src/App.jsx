import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     
      <div className='flex justify-center items-center h-screen' >
      <div style={{backgroundColor:'yellowgreen'}}>
hey
      </div>
      <div style={{backgroundColor:'black'}}>
hello
      </div>
      <div style={{backgroundColor:'yellowgreen'}}>
yes
      </div>
      </div>
    
  )

}

export default App;
