import React, {Component} from 'react';
import MySecondComponent from './SecondComponent';

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
