import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';


class App extends React.Component<any,any> {
   public render(){
       return (
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        </Layout>
      );
   }
}

export default App;