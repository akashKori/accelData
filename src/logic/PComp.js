import React from 'react'

export default class PComp extends React.PureComponent{
    
    render(){
       const { name, ar, obj } = this.props
       console.log('re render in pure component')
       return(<div>
              name in Pure  renderd :  {name}
              <> 
                {ar.map(l=> <> {l}</>)}
              </>
              <>
               {obj.a.key}
              </>
            </div>)
    }
}