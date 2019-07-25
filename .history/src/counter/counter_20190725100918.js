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
            score: this.state.score + 2
        });
    }

    render() {
        return ( 
        <div>
            Name: {this.state.name} <br> 
            Score: {this.state.score}
            <button onClick = {this.changeName()}> CHANGE </button> 
        </div>
        );
    }
}


export default Counter;