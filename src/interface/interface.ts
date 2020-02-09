 export interface IData{
    name:string,
    driverMemory:string,
    executorCores:string,
    executorMemory:string,
    NumExecutor:string
}

export interface IContext{
    data:IData
    handleChange:(input:string) => 
    (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >)=>void
}
