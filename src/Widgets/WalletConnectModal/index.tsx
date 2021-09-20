import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '@/UIkit/Modal';
import { selectWalletConnectModalVisible, closeWalletModalVisible } from '@/Store/Layout';

export const WalletConnectModal = () => {
	const dispatch = useDispatch();
	const walletConnectModalVisible = useSelector(selectWalletConnectModalVisible);
	const handleCloseWalletConnectModal = useCallback(
		() => dispatch(closeWalletModalVisible()),
		[dispatch]
	);

	return (
		<Modal visible={walletConnectModalVisible} onMaskClick={handleCloseWalletConnectModal}>
			<div className="w-80 h-9"></div>
		</Modal>
	);
};
