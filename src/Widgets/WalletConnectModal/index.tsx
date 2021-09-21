import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { Modal } from '@/UIkit/Modal';
import { selectWalletConnectModalVisible, closeWalletModalVisible } from '@/Store/Layout';

import { injected, walletconnect } from './connector';

export const WalletConnectModal = () => {
	const context = useWeb3React<Web3Provider>();
	const { connector, library, account, activate, deactivate, active, error, chainId } = context;
	const dispatch = useDispatch();
	const walletConnectModalVisible = useSelector(selectWalletConnectModalVisible);
	const handleCloseWalletConnectModal = useCallback(
		() => dispatch(closeWalletModalVisible()),
		[dispatch]
	);
	console.log(context, connector, library, account, activate, deactivate, active, error);

	return (
		<Modal visible={walletConnectModalVisible} onMaskClick={handleCloseWalletConnectModal}>
			<div className="h-96 w-96">
				<div>
					<div>metamask</div>
					<div>Is Active: {String(active)}</div>
					<div>account: {account} </div>
					<div>chainId: {chainId}</div>
					<button
						className=" border-gray-300 border border-solid px-6 rounded"
						onClick={() => {
							activate(injected);
						}}>
						Connect Metamask
					</button>
					<button
						className="border-gray-300 border border-solid px-6 rounded"
						onClick={() => {
							deactivate();
						}}>
						deactivate
					</button>
				</div>

				<div>
					<div>Wallet Connect</div>
					<div>
						<button
							className=" border-gray-300 border border-solid px-6 rounded"
							onClick={() => {
								activate(walletconnect);
							}}>
							Wallet Connect
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
};
