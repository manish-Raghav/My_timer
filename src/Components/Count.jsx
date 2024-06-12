import React, { useContext } from 'react'
import imgs from '../assets/timer.jpg'
import './count.css'

const Count = () => {
  const{sec,mili,hour,min,isr} =useContext(AppcContext)  
  return (
    <div className='par'>
      
        <div className='child1'>
          <h3>Please Set The Timer</h3>
        <div className='achild'>
        <div className='abc'>
        
            <label>HH</label>
            <input value={hour}  />
        </div>
        <div className='abc'>
        
        <label>MM</label>
        <input value={min}  />
    </div>
    <div className='abc'>
        
        <label>SS</label>
        <input value={sec}  />
    </div>
        
        </div>
           
           <div className='bchild'>
            <button className='btn'>Stop</button>
            <button className='btn'>Start</button>
            
    
           </div>
           
           
          
        </div>
    </div>
  )
}

export default Count
