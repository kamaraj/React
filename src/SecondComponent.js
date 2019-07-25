import React from 'react';

class MySecondComponent extends React.Component {
    constructor(props){
    super(props)
        this.state={
             year: this.props.year   
        }
        this.incrementYear = this.incrementYear.bind(this)
        this.decrementYear = this.decrementYear.bind(this)
    }

    incrementYear=function(){
this.setState({
    year: this.state.year+1
})
    }

    
    decrementYear=function(){
        this.setState({
            year: this.state.year+1
        })
            }

    render() { 
        return ( 
            <div>
                Name:       {this.props.name}
                <br></br>
                Location:   location
                <br></br>
                Year:   {this.props.year}
                <button onClick={this.incrementYear}>+</button> 
                <button onClick={this.decrementYear}>-</button> 
            </div>
         );
    }
}
 ;

export default MySecondComponent; 

