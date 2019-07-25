import React from 'react';
import ReactDOM from 'react-dom';
import MyFirstComponent from './AppComponent';

var position = document.getElementById('rootcontainer')

ReactDOM.render(<MyFirstComponent></MyFirstComponent>,position)
ReactDOM.render(<MySecondComponent></MySecondComponent>,position)
ReactDOM.render(<MyThirdFirstComponent></MyThirdFirstComponent>,position)