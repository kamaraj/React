import React from 'react'

class Counter extends React.Component {

constructor(){
    super()
    this.state = {
        "name": "Dr Strange"
    }
}

changeName=function(){
    console.log(this.state.name)
}

    render() { 
        return (  
            <div>
                Counter: {this.state.name}
                <br></br>
                <button onClick={this.changeName}>CHANGE</button>
            </div>
        );
    }
}

 
export default Counter ;