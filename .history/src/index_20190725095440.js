import React from 'react';

class Counter extends Component {
    state = {  }
    render() { 
        return (
            <div>
                Name: {somevalue}
                <button onClick={this.changeName}>change</button>
            </div>
          );
    }
}
 
export default Counter;
