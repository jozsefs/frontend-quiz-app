import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import reducers from './reducers/reducers';
import Main from './containers/main';
import Home from './components/home';
import Quiz from './components/quiz';
import About from './components/about';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

const router = ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="quiz" component={Quiz}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount')
);

export default router;
