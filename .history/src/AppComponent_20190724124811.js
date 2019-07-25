import React, {Component} from 'react';

class  MyFirstComponent extends Component {
   
    render() { 
        return ( 
        <div> 
            Hello, <mySecondComponent sname={this.props.sname}></mySecondComponent>
        </div> );
    }
}
 
export default MyFirstComponent ;
