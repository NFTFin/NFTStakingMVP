import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './Counter';
import layoutReducer from './Layout';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		layout: layoutReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
