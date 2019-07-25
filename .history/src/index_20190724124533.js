import React from 'react';
import ReactDOM from 'react-dom';
import MyFirstComponent from './AppComponent';
import MySecondComponent from './AppComponent';

var position = document.getElementById('rootcontainer')

ReactDOM.render(<div>
    <MyFirstComponent name="OBB"></MyFirstComponent>
    <MyFirstComponent name="Ashok"></MyFirstComponent>
    <MyFirstComponent name="Senthil"></MyFirstComponent>

    <MySecondComponent ></MySecondComponent>

</div>
,position)