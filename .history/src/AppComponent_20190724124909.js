import React, {Component} from 'react';

class  MyFirstComponent extends Component {
   
    render() { 
        return ( 
        <div> 
            Hello, <mySecondComponent sname={this.props.sname}></mySecondComponent>
            <hr></hr>
        </div> );
    }
}
 
export default MyFirstComponent ;
