import React, {Component} from 'react';

class  MyFirstComponent extends Component {
   
    render() { 
        return ( 
        <div> 
            Hello from {this.props.name}!!!
            <br></br><hr></hr>
            Hello, <mySecondComponent></mySecondComponent>
        </div> );
    }
}
 
export default MyFirstComponent ;
