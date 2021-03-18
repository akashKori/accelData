import React, {useState, useEffect } from 'react'

function useToggle (){
    const [isSet, setToggle] = useState(false)
     useEffect(()=>{
        setToggle(!isSet)
     }, [isSet])
    return isSet
}