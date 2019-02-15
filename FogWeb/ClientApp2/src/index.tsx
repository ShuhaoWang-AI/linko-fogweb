import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory, BrowserHistoryBuildOptions  } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

declare global {
  interface Window {
    initialReduxState: () => void;
      __REDUX_DEVTOOLS_EXTENSION__: () => any;
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: ({}:any) => any;
  }
}
// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') || '';

class LocalBrowserHistoryBuildOptions implements BrowserHistoryBuildOptions{
  basename?:string; 

  constructor(basename?:string){
    this.basename = basename;
  } 
} 

const option = new LocalBrowserHistoryBuildOptions(baseUrl); 

const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState || {
};
const store = configureStore(history, initialState);

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement);

registerServiceWorker();
