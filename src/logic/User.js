import React, {useEffect, useState} from 'react' 
import Child from './Child'
import {ThemeProvider} from './ThemeProvider' 

export default function User() {
    const [name,setName] = useState('')
   return (<div>
           <input
             type='text'
             value={name}
             onChange={evt=>setName(evt.target.value)}
           />
          <ThemeProvider value={name}>
           <Child/>
          </ThemeProvider> 
        </div>)
}

