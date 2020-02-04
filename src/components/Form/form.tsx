import React,{useState,FC} from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import {IData} from '../../interface/interface';
import FormContent from './form-content/form-content';
import  './form.scss';
import {Row,Col} from 'antd';

const MForm:FC=()=> {
    const [data,setData] = useState<IData>(
        {
        name:"",
        driverMemory:"",
        executorMemory:"",
        executorCores:"",
        NumExecutor:""
       }
    );
 
    const handleChange = (input:string) => 
        (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >)=>{
        const newData= {...data,[input]:e.target.value};
        setData(newData);
        console.log(data)
    }

    return (
        <Row className="wizard-pannel">
             <Col span={12}>
                 <FormContent handleChange={handleChange} data={data} />
             </Col>
             <Col span={12}>
                <ol>
                  <li>--name : {data.name} /</li>
                  <li>--driverMemory : {data.driverMemory} /</li>
                  <li>--executorMemory : {data.executorMemory} /</li>
                  <li>--executorCores : {data.executorCores} /</li>
                  <li>--NumExecutor : {data.NumExecutor} /</li>
                </ol>
             </Col>
        </Row>
    );
}

export default MForm;
            
            