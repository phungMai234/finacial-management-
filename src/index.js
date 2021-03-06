import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router, View } from 'react-navi'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import routes from "./routes"

ReactDOM.render(
  <Router routes={routes}>
    <React.StrictMode>
      <App>
        <Suspense fallback={null}>
          <View />
        </Suspense>
      </App>
    </React.StrictMode></Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
