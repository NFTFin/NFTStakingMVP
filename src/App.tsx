import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from '@/Containers/Header';
import Counter from '@/Pages/Counter';
import { StakingNFTList } from '@/Pages/StakingNFTList';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/about">
					<div>about</div>
				</Route>
				<Route path="/contact">
					<div>contact</div>
				</Route>
				<Route path="/demo">
					<Counter />
				</Route>
				<Route path="/StakingNFT">
					<StakingNFTList />
				</Route>
				<Redirect to="/StakingNFT" />
			</Switch>
		</div>
	);
}

export default App;
