class Session {
    constructor(props){
        const {key} = props
        _key = key
        this.getKey = function() {
            return _key
        }
    }

    setItem(){
        const { data } = props
        sessionStorage.setItem(this.getKey(), data)
    }

    getItem() {
        return sessionStorage.getItem(this.getItem())
    }
}

export default Session