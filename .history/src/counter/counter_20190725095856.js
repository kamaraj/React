import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props)
    }

    changeName = function () {

    }

    render() {
        return ( <div>
            Name: somevalue <br > < /br> 
            <button onClick = {this.changeName()} > CHANGE < /button> </div>
        );
    }
}


export default Counter;