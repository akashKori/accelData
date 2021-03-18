import {useEffect} from 'react'

export default function useLogger(values){
  useEffect(()=>{
   console.log(values)
  },[values])
}