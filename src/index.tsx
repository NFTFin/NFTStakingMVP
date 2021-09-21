import React from 'react';
import ReactDOM from 'react-dom';

import { store } from '@/Store';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReactReduxProvider } from 'react-redux';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from '@/utils/web3react';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<ReactReduxProvider store={store}>
			<Web3ReactProvider getLibrary={getLibrary}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Web3ReactProvider>
		</ReactReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
