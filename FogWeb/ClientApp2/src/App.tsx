import React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout';
import Home from './components/home';
import About from './components/about';
import Counter from './components/counter';
import FetchData from './components/fetch-data';



class App extends React.Component<any,any> {
   public render(){
       return (
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
          <Route path='/about' component={About} />
        </Layout>
      );
   }
}

export default App;