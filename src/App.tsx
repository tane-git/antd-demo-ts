import React, { FC } from 'react';
import './App.less';
import { Grants } from './components';
import { Nav } from './components/Nav';

// antd
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const App: FC = () => (
  <div className="App">
    <Layout>
      <Header>
        <Nav />
      </Header>
      <Content>
        <Grants />
      </Content>
      <Footer>
      </Footer>
    </Layout>
  </div>
);

export default App;