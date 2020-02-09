import React,{useState,FC} from 'react';
import FormContent from './form-content/form-content';
import {Consumer} from '../../context';
import  './form.scss';
import {Row,Col} from 'antd';
import {Controlled as CodeMirror} from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/htmlmixed/htmlmixed.js');

const MForm:FC=()=> {
    return (   
        <Row className="wizard-pannel">
         <Col span={12}>
             <FormContent />
         </Col>
        <Consumer>
          {value =>(  
           <Col span={12}>
             <CodeMirror
             className=''
             autoCursor={true}
             value={value.data.name}
             options={{
                 lineNumbers: true,
                 mode: "shell",
                 theme: "material"
              }}
             onBeforeChange={(editor, data, value) => {}}
             onChange={(editor, data, value) => {}}
            /> 
           </Col>
        )}  
        </Consumer>  
    </Row> 
    );
}

export default MForm;
            
            