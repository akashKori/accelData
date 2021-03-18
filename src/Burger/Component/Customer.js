import { useEffect, useState } from "react"
import React from 'react'

export default function Customer() {
  const [name, setName] = useState('')
  const [num, setNum] = useState(0)

  useEffect(()=>{
     setName(name)
  }, [name])

  useEffect(()=>{
     setNum(num)
  } , [num])

  return (<div>
     <input 
          type='text'
          value={name}
          onChange={setName}
      />
      <input 
          type='text'
          value={num}
          onChange={setNum}
      />
  </div>)
}