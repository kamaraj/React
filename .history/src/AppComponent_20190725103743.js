import React, {Component} from 'react';
import MySecondComponent from './SecondComponent';

class  MyFirstComponent extends React.Component {
   
    render() { 
        return ( 
        <div> 
                     
            <MySecondComponent name={this.props.name}
            location={this.props.location}
               year = {this.props.children} 
            >
                
            </MySecondComponent>
            <hr></hr>
        </div> );
    }
}
 
export default MyFirstComponent ;
