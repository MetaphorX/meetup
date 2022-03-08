import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';


ReactDOM.render(
    <BrowserRouter>
        <FavoritesContextProvider> 
            <App /> 
        </FavoritesContextProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);

