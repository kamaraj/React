import React, {Component} from 'react';

class  MyFirstComponent extends Component {
   
    render() { 
        return ( 
        <div> 
            Hello from {this.props.name}!!!
        </div> );
    }
}
 
export default MyFirstComponent ;
