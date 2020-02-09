import React,{useState,FC} from 'react';
import  './form-content.scss';
import {IData} from '../../../interface/interface';
import {Consumer} from '../../../context';
import {Form , Icon, Input, Button} from 'antd';
const {TextArea} = Input

const FormContent:FC=()=> {
    return (
    <Consumer> 
      {value=>(
     <div className="form-content">
         <Form.Item label="Application app">
             <Input 
              type="text" 
              placeholder="Awesome Name"  
              onChange={value.handleChange('name')} 
              value={value.data.name} 
             />
         </Form.Item>
         <Form.Item label="class Name">
             <Input 
              type="text" 
              placeholder="com.company.project.Driver" 
              onChange={value.handleChange('driverMemory')} 
              value={value.driverMemory} 
             />
         </Form.Item>
         <Form.Item label="Application jar path">
             <Input 
              type="text" 
              placeholder="/path/to/spark/awesome-app.jar" 
              onChange={value.handleChange('executorMemory')} 
              value={value.executorMemory} 
             />
         </Form.Item>
         <Form.Item label="Application jar path">
             <Input 
              type="text" 
              placeholder="executorCores" 
              onChange={value.handleChange('executorCores')} 
              value={value.data.executorCores} 
             />
         </Form.Item>
         <Form.Item label="Application Parameters (Optional)">
             <TextArea 
              placeholder="--param1 <value1> --params2<value2>" 
              rows={1} 
              onChange={value.handleChange('NumExecutor')} 
              value={value.data.NumExecutor} 
             />
         </Form.Item>
     </div>
    )}    
    </Consumer>    
    )
}


export default FormContent;