const header = { 
    'auth-token': '19c4ff12-e027-4320-b844-2cda768714e8',
    'content-type': 'application/json'
}

export class RestApi {
    constructor(props){
        const { type } = props
        let _service
        const _baseUrl =''
        const _callType = type && type.toUpperCase()
        this.callService = function(){
            if(_callType ==="POST") {
                _service = new Post({baseUrl:_baseUrl,...props})
            } else {
                _service = new Get({baseUrl:_baseUrl,...props})
            }
        }
        return _service
    }
}

class Post {
    constructor(props){
       let body = {} || props.body 
       const _jsonBody = JSON.stringify(body)
       const _props = props
       this.getJson = function(){
           return _jsonBody
       }

       this.getProps=function() {
           return _props
       }
    }
    callApi(){
      const prop = this.getProps()
      const {baseUrl} = prop
      return fetch(baseUrl,{
          body: this.buildOption(),
          headers: header
        })
    }

    buildOption(){
        return {
            method: "POST", 
            body: this.getJson(),
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        }
    }
}

class Get {
  constructor(props) {
    let _props = props
    this.getProps=function() {
        return _props
    }
  }   
   callApi() {
    const prop = this.getProps()
    const {baseUrl} = prop
    return fetch(baseUrl)  
  }
}