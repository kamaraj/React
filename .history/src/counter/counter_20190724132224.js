import React from 'react'

class Counter extends React.Component {

constructor(){
    super()
    this.state = {
        "name": "Dr Strange"
    }
}

changeName=function(){
    
}

    render() { 
        return (  
            <div>
                Counter: {this.state.name}
                <br></br>
                <button onClick={changeName}>CHANGE</button>
            </div>
        );
    }
}

 
export default Counter ;