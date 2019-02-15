import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { History } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as Counter from './Counter';
import * as WeatherForecasts from './WeatherForecasts';

export default function configureStore (history: History, initialState: any) {
  const reducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer
  };

  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ) {
        enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ ());
  }

    //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose; 
    const composeEnhancers =
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;


  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  let enh = enhancers.map(i => ()=> i )
  return createStore(
    rootReducer,
    initialState,
      composeEnhancers(applyMiddleware(...middleware))
    // compose(applyMiddleware(...middleware), ...enhancers)
  );
}
