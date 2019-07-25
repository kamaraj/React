import React from 'react';
import ReactDOM from 'react-dom';
import MyFirstComponent from './AppComponent';
import { spawn } from 'child_process';

var position = document.getElementById('rootcontainer')

ReactDOM.render(<span><MyFirstComponent></MyFirstComponent>

</span>
,position)