import React,{FC} from 'react';
import FormContainer from './components/Form/form';
import {Layout} from 'antd';
import './App.scss';

const {Header,Content,Footer,Sider} = Layout; 

const App:FC = (props) => {
  return (
    <div>
      <Layout className="App">
        <Header>header</Header>
        <Layout className="middle-layout">
          <Content className="main-content">
            <FormContainer />                
          </Content>               
        </Layout>
      </Layout>   
    </div>
  );
}

export default App;
