import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DrinksProviderWrapper} from "./state/DrinksContext";
import {FavouriteDrinksProviderWrapper} from "./state/FavouriteDrinksContext";

ReactDOM.render(
        <DrinksProviderWrapper>
            <FavouriteDrinksProviderWrapper>
                <App />
            </FavouriteDrinksProviderWrapper>
        </DrinksProviderWrapper>,
  document.getElementById('root')
);

