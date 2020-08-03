import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';


// ------------ THESE ARE OUR GENERATOR FUNCTIONS --------------
// Create the rootSaga generator function
function* rootSaga() {
    
    // yield takeEvery( 'SET_DETAILS', getDetails );
}

// function* updateCheckouts(action) {
//     try{
//         console.log('In updateCheckouts generator.')
//         const response = yield axios.put('/Checkouts', action.payload);
//         yield console.log('In updateCheckouts', response.data);
//     }
//     catch(error) {
//         console.log( 'Trouble updating Checkouts ', error )
//     }
// };


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// ------------ THESE ARE OUR REDUCERS --------------

// Used to store Checkouts returned from the server

// const details = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_DETAILS':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));

