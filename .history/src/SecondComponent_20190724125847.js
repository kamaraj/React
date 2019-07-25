import React from 'react';

class MySecondComponent extends React.Component {
    
    render() { 
        return ( 
            <div>
                Name:       {this.props.sname}
                <br></br>
                Location:   {this.props.slocation}

            </div>
         );
    }
}
 ;

export default MySecondComponent; 

