import React,{useState,FC,createContext} from 'react';
import {IContext,IData} from './interface/interface';

const MyContext = React.createContext<Partial<any>>({});

export const Provider:FC = (props)=>{
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
    }
    const contextValue = {
        data:data,
        handleChange:handleChange
    }

    return(
        <MyContext.Provider value={contextValue}>
          {props.children}
        </MyContext.Provider>
    )
}
export const Consumer = MyContext.Consumer;


