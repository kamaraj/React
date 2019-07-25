import React from 'react'

class Counter extends React.Component {

    render() { 
        return (  
            <div>
                Name : somevalue
                <br></br>
                <button onClick={this.changeName}>CHANGE</button>
            </div>
        );
    }
}

 
export default Counter ;