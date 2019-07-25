import React from 'react'

class Counter extends React.Component {

constructor(){
    super()
    this.state = {
        "name": "Dr Strange"
    }
}

    render() { 
        return (  
            <div>
                Counter: name
            </div>
        );
    }
}

 
export default Counter ;