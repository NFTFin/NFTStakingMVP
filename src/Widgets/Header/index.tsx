import React, { FC, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showWalletModalVisible } from '@/Store/Layout';

export const Header: FC = memo(() => {
	const dispatch = useDispatch();
	const handleShowWalletConnectModal = useCallback(() => {
		dispatch(showWalletModalVisible());
	}, [dispatch]);
	return (
		<header className="flex w-full h-16 shadow flex-shrink-0">
			<div className="grid grid-cols-3 w-full h-full items-center">
				<div className="justify-self-start"> Logo </div>
				<div className="justify-self-center"> Menu </div>
				<div className="justify-self-end">
					<button onClick={handleShowWalletConnectModal}>Connect Wallet</button>
				</div>
			</div>
		</header>
	);
});
