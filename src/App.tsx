import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from '@/Containers/Header';
import Modal from '@/UIkit/Modal';
import Counter from '@/Pages/Counter';
import { StakingNFTList } from '@/Pages/StakingNFTList';
import { StakingNFTDetail } from '@/Pages/StakingNFTDetail';

function App() {
	const [visible, setVisible] = React.useState(false);
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<button onClick={() => setVisible(prev => !prev)}> toggle </button>
			<div className="flex-grow overflow-y-auto">
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
					<Route exact path="/StakingNFT">
						<StakingNFTList />
					</Route>
					<Route exact path="/StakingNFT/:stakingId">
						<StakingNFTDetail />
					</Route>
					<Redirect to="/StakingNFT" />
				</Switch>
			</div>
			<Modal visible={visible} onMaskClick={() => setVisible(false)}>
				<div className="w-80 h-9"></div>
			</Modal>
		</div>
	);
}

export default App;
