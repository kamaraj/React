import React from 'react';

class MySecondComponent extends React.Component {
    
    render() { 
        return ( 
            <div>
                Name:       {this.props.sname}
                <br></br>
                Location:   {this.props.slocation}
                <br></br>
                Year:   {this.props.year}
            </div>
         );
    }
}
 ;

export default MySecondComponent; 

