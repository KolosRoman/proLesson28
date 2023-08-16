import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/styles.scss';
import {App} from './components/App.jsx';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger';
import {Provider} from 'react-redux'
import {TodoArray} from "./components/TodoArray.js";

const initialTodoArray = {
    list: TodoArray
}

const todoReducer = (state = initialTodoArray, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            state = {
                list: [...state.list, action.addTodo]
            }
            break;
        }
    }

    return state
}


const store = createStore(todoReducer, applyMiddleware(logger));

const root = createRoot(document.getElementById('app'));


root.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    )