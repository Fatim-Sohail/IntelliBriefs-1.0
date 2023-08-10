import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "6984d771348a4822a8e8fec8fecdd8a1";
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = createAsynThunk('news/fetch', async(category, thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines?category=${category}&apiKey=${API_KEY}`);
        return response.data.articles;
    }
    catch(error) {
        console.log ("Error fetching news by category:", error);
        throw error;
    }
})

const initialState = {
    articles: [],
    category: '',
    size: 0,
    search: [],
    isLoading: false,
    page: 1
}

const NewsSlice = createSlice ({
    name: 'name', initialState,
    reducers: {
        category(state) {
            state.category = action.payload;
            console.log("Category: ", state.category);
        },

        setNewsArticle(state) {
            state.articles = action.payload;
        },

        nextPage(state) {
            if (state.page <Math.ceil(state.size / 12)) {
                state.page += 1;
            }
        },

        prevPage(state) {
            if (state.page > 1) {
                state.page -= 1;
            }
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
          state.articles = action.payload;
          state.isLoading = false;
          state.size = state.articles;
          state.articles = state.articles.filter(article => article.urltoImaage != null);
          console.log(state.articles)
        });
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        });
      },
})


export default NewsSlice.reducer;
export const { category, setNewsArticle, nextPage, prevPage } = NewsSlice.actions;