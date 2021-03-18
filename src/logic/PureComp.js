import React  from 'react'
import PComp from './PComp'
import RegComp from './RegComp'

export default class  PureComp extends React.Component {
     state={
          name: "akash",
          ar: [2],
          obj: {a: {
              key:
              3}
            }
      }

  componentDidMount() {
      let count = 1      
      setInterval(() => {
          this.setState((pState)=>{
              let newObj = {...pState.obj}
              newObj.a.key = 666
              return {
                  name: 'akash',
                  obj: newObj                  
              }
          })
      }, 1000);
  }

 render(){
     const {name, ar, obj} = this.state
 return(<> 
        <RegComp name={name}/>
        <PComp name={name} ar={ar} obj={obj}/>
    </>)
  }
}

