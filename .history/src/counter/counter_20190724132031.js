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
                Counter: {this.state.name}
            </div>
        );
    }
}

 
export default Counter ;