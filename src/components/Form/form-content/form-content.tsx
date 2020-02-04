import React,{useState,FC} from 'react';
import  './form-content.scss';
import {IData} from '../../../interface/interface';
import {Form , Icon, Input, Button} from 'antd';
const {TextArea} = Input

interface FormContent{
    handleChange:(input: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    data:IData
}

const FormContent:FC<FormContent>=(props)=> {
    const {handleChange,data} = props;
    return (
     <div className="form-content">
         <Form.Item label="Application app">
             <Input 
              type="text" 
              placeholder="Awesome Name"  
              onChange={handleChange('name')} 
              value={data.name} 
             />
         </Form.Item>
         <Form.Item label="class Name">
             <Input 
              type="text" 
              placeholder="com.company.project.Driver" 
              onChange={handleChange('driverMemory')} 
              value={data.driverMemory} 
             />
         </Form.Item>
         <Form.Item label="Application jar path">
             <Input 
              type="text" 
              placeholder="/path/to/spark/awesome-app.jar" 
              onChange={handleChange('executorMemory')} 
              value={data.executorMemory} 
             />
         </Form.Item>
         <Form.Item label="Application jar path">
             <Input 
              type="text" 
              placeholder="executorCores" 
              onChange={handleChange('executorCores')} 
              value={data.executorCores} 
             />
         </Form.Item>
         <Form.Item label="Application Parameters (Optional)">
             <TextArea 
              placeholder="--param1 <value1> --params2<value2>" 
              rows={1} 
              onChange={handleChange('NumExecutor')} 
              value={data.NumExecutor} 
             />
         </Form.Item>
     </div>
    )
}


export default FormContent;