import React,{ useEffect,useState } from 'react'

export const Dashboard=props=>{
    const [quizType, setQuizType] = useState([])
    useEffect(()=>{
       setQuizType(quizType)
       return ()=> setQuizType([])   
    },[quizType])     
    return (<div> </div>)   
}
