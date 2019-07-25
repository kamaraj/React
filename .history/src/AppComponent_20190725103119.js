import React, {Component} from 'react';
import MySecondComponent from './SecondComponent';

class  MyFirstComponent extends React.Component {
   
    render() { 
        return ( 
        <div> 
            Hello,             {this.props.children}
            <MySecondComponent sname={this.props.name}
            slocation={this.props.location}
               year = {this.props.year} 
            >
                
            </MySecondComponent>
            <hr></hr>
        </div> );
    }
}
 
export default MyFirstComponent ;
