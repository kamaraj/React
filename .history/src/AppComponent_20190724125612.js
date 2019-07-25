import React, {Component} from 'react';

class  MyFirstComponent extends React.Component {
   
    render() { 
        return ( 
        <div> 
            Hello, 
            <MySecondComponent sname={this.props.name}
            slocation={this.props.location}
            >

            </MySecondComponent>
            <hr></hr>
        </div> );
    }
}
 
export default MyFirstComponent ;
