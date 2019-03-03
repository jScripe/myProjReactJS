import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'

import reducers from './reducers/index';

import App from './containers/app/app';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root')
);