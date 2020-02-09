import React,{FC} from 'react';
import {Consumer} from '../../../context';
import  '../form.scss';
import {Controlled as CodeMirror} from 'react-codemirror2'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/htmlmixed/htmlmixed.js');
require("codemirror/mode/shell/shell");

const Codemirror:FC=()=> {
    return (   
        <Consumer>
          {value =>(  
            <CodeMirror
             autoCursor={true}
             value={value.output}
             options={{
                lineNumbers: true,
                theme:'material',
             }}
             onBeforeChange={(editor, data, value) => {}}
             onChange={(editor, data, value) => {}}
            /> 
        )}  
        </Consumer>  
    );
}

export default Codemirror;



