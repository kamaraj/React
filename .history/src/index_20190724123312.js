import React from 'react';
import ReactDOM from 'react-dom';
import MyFirstComponent from './AppComponent';
import { spawn } from 'child_process';

var position = document.getElementById('rootcontainer')

ReactDOM.render(<div>
    <MyFirstComponent name="OBB"></MyFirstComponent>
    <MyFirstComponent name="Ashok"></MyFirstComponent>
    <MyFirstComponent name="Senthil"></MyFirstComponent>
</div>
,position)