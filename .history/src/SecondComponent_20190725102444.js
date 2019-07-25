import React from 'react';

class MySecondComponent extends React.Component {
    constructor(props){
    super(props)
        this.state={
             year: this.props.year   
        }
    }

    render() { 
        return ( 
            <div>
                Name:       {this.props.name}
                <br></br>
                Location:   location
                <br></br>
                Year:   {this.props.year}
                <button onClick={this.changeName}>CHANGE</button> 
                <button onClick={this.changeName}>CHANGE</button> 
            </div>
         );
    }
}
 ;

export default MySecondComponent; 

