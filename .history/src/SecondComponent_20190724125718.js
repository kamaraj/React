import React from 'react';

class MySecondComponent extends React.Component {
    
    render() { 
        return ( 
            <div>
                Name:       {this.props.name}
                <br></br>
                Location:   {this.props.location}

            </div>
         );
    }
}
 ;

export default MySecondComponent; 

