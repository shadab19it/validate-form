import React,{FC} from 'react';
import {Provider} from './context';
import FormContainer from './components/Form/form';
import {Layout} from 'antd';
import './App.scss';

const {Header,Content} = Layout; 

const App:FC = (props) => {
  return (
  <Provider>
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
  </Provider> 
  );
}

export default App;
