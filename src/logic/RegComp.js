import React from 'react'

export default class RegComp extends React.Component{
    
    render(){
       const { name } = this.props
       console.log('re render in regular component')
       return(<div>
              name in Reg  renderd :  {name}
            </div>)
    }
}