import React from 'react';


class LifeCycle  extends Component {

    componentWillMount(){
        console.log("Component will mount")
    }

    render() { 
        return (        
            <div>
                Exploring Component LifeCycle
            </div>
        );
    }
}
 
export LifeCycle default ;