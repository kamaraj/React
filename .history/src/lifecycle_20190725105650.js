import React from 'react';


class LifeCycle  extends Component {

    componentWillMount(){
        console.log("Component will mount")
    }

    componentDidMount(){
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