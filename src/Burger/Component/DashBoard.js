import React from 'react'
import Customer from './Customer'
import Order from './Order'
import '../Style/style.css'

function DashBoard(props){
   return (<div> 
       <Customer/>
       <Order/>    
   </div>)
}

export default DashBoard