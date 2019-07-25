import React from 'react';


class LifeCycle  extends React.Component {

    componentWillMount(){
        console.log("Component will mount")
    }

    componentDidMount(){
        alert("2")
        console.log("Component is mounted in Browser")
    }

    render() { 
        return (        
            <div>
                Exploring Component LifeCycle
            </div>
        );
    }
}
 
export default LifeCycle;