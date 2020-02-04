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
              <div className="output">
                <ol>
                  <li><span className="outflname">--name</span> : {data.name} /</li>
                  <li><span className="outflname">--driverMemory </span>: {data.driverMemory} /</li>
                  <li><span className="outflname">--executorMemory </span>: {data.executorMemory} /</li>
                  <li><span className="outflname">--executorCores</span> : {data.executorCores} /</li>
                  <li><span className="outflname">--NumExecutor</span> : {data.NumExecutor} /</li>
                </ol>
              </div>
             </Col>
        </Row>
    );
}

export default MForm;
            
            