import React from 'react';
import ReactDOM from 'react-dom';
import MyFirstComponent from './AppComponent';
import MySecondComponent from './AppComponent';

var position = document.getElementById('rootcontainer')

ReactDOM.render(<div>
    <MyFirstComponent name="OBB" location="chennai"></MyFirstComponent>
    <MyFirstComponent name="Ashok" location="Delhi"></MyFirstComponent>
    <MyFirstComponent name="Senthil" location="Pune"></MyFirstComponent>

    <MySecondComponent ></MySecondComponent>

</div>
,position)