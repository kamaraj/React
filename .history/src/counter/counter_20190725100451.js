import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            name: "Shiva",
            score:8,
            friends: ["obb","bnp"]

        }
    }

    changeName = function () {
        this.setState({
            name: "BNP",
            score: 8
        });
    }

    render() {
        return ( 
        <div>
            Name: somevalue <br > < /br> 
            <button onClick = {this.changeName()} > CHANGE </button> 
        </div>
        );
    }
}


export default Counter;