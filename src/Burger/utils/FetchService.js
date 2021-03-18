import Session from './Session'


function placeOrder() {
     const {baseUrl, json} =  props
     return fetch(baseUrl+'placeOrder',{
             body: JSON.stringify(json),       
             type: "POST"
           })
           .then(res=>{
              return res.json() 
           })
           .then((data)=> success(data))
           .catch(error=> onerror(error))
}


function getAllBurger() {
    const {baseUrl} = props
    return fetch()
           .then(res=>res.json())
           .then(data=> success(data))
           .catch(error=> onerror(error))   
    
}


function getAllBurgerByEmpId() {
    const {baseUrl, data} = props
    let newSession = new Session('empId')
    let json = {
        employeeId: newSession.getItem()
    }
    return fetch(baseUrl+'getAllBurgerByEmpId',{
        body: JSON.stringify(json),
        type: "POST"
    })
    .then(res=> res.json())
    .then(data=> success(data))
    .catch(error=> onerror(error))
}

