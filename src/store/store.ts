import { ticketsAPI } from '@/store/services/TicketsService';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [ticketsAPI.reducerPath]: ticketsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ticketsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
