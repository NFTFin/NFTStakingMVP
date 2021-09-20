import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from '@/Widgets/Header';
import { Sidebar } from '@/Widgets/Sidebar';
import { WalletConnectModal } from '@/Widgets/WalletConnectModal';
import Counter from '@/Pages/Counter';
import { StakingNFTList } from '@/Pages/StakingNFTList';
import { StakingNFTDetail } from '@/Pages/StakingNFTDetail';

function App() {
	return (
		<>
			<div className="h-screen flex flex-col flex-shrink-0">
				<Header />
				<div className="flex-grow flex overflow-hidden">
					<Sidebar />
					<div className="h-full flex-grow overflow-y-auto">
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
				</div>
			</div>
			<WalletConnectModal />
		</>
	);
}

export default App;
