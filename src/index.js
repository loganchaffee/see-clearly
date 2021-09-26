import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './styles/index.css';
import App from './App';

import {store} from './store/store'

// store.subscribe(() => console.log(store.getState()))

// store.dispatch(incremented(1))
// store.dispatch(decremented(2))
// store.dispatch(set({ floor: 3, newCount: 24 }))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)