import React, {useContext} from 'react'
import {UserContext} from './ThemeProvider'
export default function Child2() 
{
    const userInfo = useContext(UserContext)
    console.log('userInfo',userInfo)
   return(<div>  
        {userInfo}
   </div>)
}