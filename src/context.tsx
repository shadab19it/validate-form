import React,{useState,FC,createContext} from 'react';
import {IContext,IData} from './interface/interface';

const MyContext = createContext({} as IContext);

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

const output = `spark-submit \\
--class ${data.name} \\
--driver-memoroy ${data.driverMemory} g\\
--executor-memory ${data.executorMemory} g\\
--executor-cores ${data.executorCores} \\
--num-executors ${data.NumExecutor} \\

`;

    const contextValue = {
        data,
        handleChange,
        output,
    }

    return(
        <MyContext.Provider value={contextValue}>
          {props.children}
        </MyContext.Provider>
    )
}

export const Consumer = MyContext.Consumer;


