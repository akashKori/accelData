import { useEffect, useState } from "react"
import React from 'react'

function Order() {
  const [ bun, setBun ] = useState(0)
  const [ salad, setSalad ] = useState(0)
  const [ burgeSlice, setSlice] = useState(0)
  const [ cutlet, setCutlet]= useState(0)

  useEffect(()=>{
     setBun()
   }, [bun])

//    useEffect((e)=>{
//     setSalad(e.target.checked)
//   }, [salad])

  useEffect(()=>{
    setSlice(burgeSlice)
  }, [burgeSlice])

  useEffect(()=>{
    setCutlet(cutlet)
  }, [cutlet])

  return (<div>
         <div> 
            <button
             onClick={setBun}> 
              Bun
            </button>
         </div>
         <div> 
         {/* <input type='checkbox' 
         onClick={setSalad}> 
              salad
            </input> */}
         </div>
         <div> 
         <button onClick={setSlice}> 
              slice
            </button>
         </div>
         <div> 
         <button onClick={setCutlet}> 
              cutlet 
            </button>
         </div>
      </div>)
}

export default Order