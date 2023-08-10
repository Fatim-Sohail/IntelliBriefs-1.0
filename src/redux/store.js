import { configureStore } from '@reduxjs/toolkit';
import NewsSlice from './slice/NewsSlice';

export const store = configureStore ({
    reducer: {
        news: NewsSlice,
    }
})

export default store;
