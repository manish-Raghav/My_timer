import React, { useEffect, useState,createContext} from 'react'
import Count from './Count';

const AppcContext = createContext(null);
const Cal = () => {
    const [hour,sethour] = useState(0);
    const [min,setmin] = useState(0);
     const [sec,setsec] = useState(0);
      const [mili,setmili] = useState(0);
      const[isr,setisr] =useState(null);

      useEffect(()=>{
        let intr;
        if(isr){
            intr =setInterval(()=>{
              if(mili>0)
              {
                setmili((mili) =>mili-1);
              }
              else if(sec>0)
              {
                setsec((sec) =>sec-1);
                setmili(99);

              }
              else if(min>0)
              {
                setmin((min) =>min-1);
                setsec(59);
                setmili(99);

              }

              else if(hour>0)
              {
                sethour((hour) =>hour-1);
                setmin(59);
                setsec(59);
                setmili(99);

              }


            })
        }
      return () =>clearInterval(intr)

      } ,[sec,mili,hour,min,isr]);
  return (
    <AppcContext.Provider value={{sec,mili,hour,min,isr}}>
    <div>
      <h1>Happy coding sir </h1>
      <Count />
    </div>
    </AppcContext.Provider>
  )
}

export default Cal
