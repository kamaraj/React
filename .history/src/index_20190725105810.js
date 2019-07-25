import React from 'react';
import ReactDOM from 'react-dom';
import MyFirstComponent from './AppComponent';
import MySecondComponent from './SecondComponent';
import Counter from './counter/counter';
import LifeCycle from './lifecycle';

var position = document.getElementById('rootcontainer')

ReactDOM.render(<div>
    <MyFirstComponent name="OBB" location="chennai">123</MyFirstComponent>
    <MyFirstComponent name="Ashok" location="Delhi">1345</MyFirstComponent>
    <MyFirstComponent name="Senthil" location="Pune">456</MyFirstComponent>

    <MySecondComponent name="Senthil" location="Pune">456</MySecondComponent>

<Counter></Counter>
<br></br>
{alert("1")}
<LifeCycle></LifeCycle>
<br></br></div>
,position)