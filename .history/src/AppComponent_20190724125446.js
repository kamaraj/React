import React, {Component} from 'react';

class  MyFirstComponent extends Component {
   
    render() { 
        return ( 
        <div> 
            Hello, 
            <mySecondComponent sname={this.props.name}
            slocation={this.props.location}
            >

            </mySecondComponent>
            <hr></hr>
        </div> );
    }
}
 
export default MyFirstComponent ;
