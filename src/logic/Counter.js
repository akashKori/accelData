import React, {useEffect, useState} from 'react'

function Counter(props){
 const [count, setCount] = useState(0)
 const {isCount} = props

 useEffect(()=>{
     document.title = `you clicked ${count} many times`     
 },[count])

 useEffect(()=>{
    return function(){
        console.log('cleaned up count')
     }
 }, [])
 return (<div> 
   <p> you clicked {count} times </p>
    <button onClick={()=>setCount(count+1)}>  click me </button>
 </div>)
}

export default Counter