import React,{FC} from 'react';
import FormContent from './form-content/form-content';
import Codemirror from './Codemirror/codemirror';
import  './form.scss';
import {Row,Col} from 'antd';

const MForm:FC=()=> {
    return (   
        <Row className="wizard-pannel">
         <Col span={12}>
             <FormContent />
         </Col>

         <Col span={12}>
            <Codemirror />
         </Col>
    </Row> 
    );
}

export default MForm;
            
            