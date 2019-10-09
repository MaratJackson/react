import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';


let renderApp = (state) => {
    ReactDOM.render(
        <App state={state}  dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
      );
}

renderApp(store.getState())

store.subscribe(renderApp)

serviceWorker.unregister();
