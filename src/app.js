import React from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Router from './Router';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers); //create app state

// highter order component: Provider
// enhance outro component
const App = () => {
    return (
        <Provider store={store}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Router />
            </View>
        </Provider>
    );
};

export default App;

