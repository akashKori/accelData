import {RestApi} from './RestApi'

export class FetchService {
  constructor(props){
      let _props = props
      this.getProps = function(){
          return _props
      }

      function serviceWrapper(){
         let _serviceFactory = new RestApi(this.getProps())
         let _service = _serviceFactory.callService()
         let response = _service.callApi() 
         response.then((res)=> serviceCode(res))             
      }

      function serviceCode(response){
        const {onSuccess,onError} = props  
        const {status} = response
        
        if(status>=200 && status<=300) {
            response
            .then((res)=>res.toJSON())
            .then((data)=>onSuccess(data))
            .catch((er)=> onError(er))
        } else {
            onError()
        }
      }
  }
}