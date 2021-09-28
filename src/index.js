import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet';
import './styles/index.css';
import App from './components/App';

import {store} from './store/store'
// store.subscribe(() => console.log(store.getState()))

// store.dispatch(incremented(1))
// store.dispatch(decremented(2))
// store.dispatch(set({ floor: 3, newCount: 24 }))


ReactDOM.render(
    <Provider store={store}>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        </Helmet>
        <App />
    </Provider>, 
    document.getElementById('root')
)