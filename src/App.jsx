import { useState } from 'react'
import Count from './Components/Count'
import Cal from './Components/Cal'



function App() {
  const [count, setCount] = useState(0)

  return (
   
      <>
     <Cal />
      </>
    
  )
}

export default App
