import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface LayoutState {
	walletConnectModalVisible: boolean;
}

const initialState: LayoutState = {
	walletConnectModalVisible: false,
};

export const layoutSlice = createSlice({
	name: 'layout',
	initialState,
	reducers: {
		showWalletModalVisible: state => {
			state.walletConnectModalVisible = true;
		},
		closeWalletModalVisible: state => {
			state.walletConnectModalVisible = false;
		},
	},
});

export const { showWalletModalVisible, closeWalletModalVisible } = layoutSlice.actions;

export const selectWalletConnectModalVisible = (state: RootState) =>
	state.layout.walletConnectModalVisible;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default layoutSlice.reducer;
