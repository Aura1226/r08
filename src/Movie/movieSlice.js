import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const fetchMoviesFn = async () => {
//     const res = await axios.get("http://localhost:8080/getMovies")
//     return res.data
// }
//export는 약간 public 개념 = 외부에서 쓰기위해서...
// export const fetchMovies = createAsyncThunk('movie/fetch', fetchMoviesFn)
export const fetchMovies =  createAsyncThunk('movie/fetchMovies', async () => {
    const res = await axios.get("http://localhost:8080/getMovies")
    console.log(res.data)
    return res.data
})

export const checkMovie = createAsyncThunk('movie/checkMovie', async() => {

    const res = await axios.get("http://localhost:8080/todo/new")//1초뒤 응답이 온다. 
    return res.data

})

//나중에 리듀서를 위해 export?
export const movieSlice = createSlice({
    name: "MovieSlice",
    initialState: {
        movies: [],
        msg: ''
    },
    reducers: {
        clearMsg: (state) => {
            state.msg =''
        }
    },
    //실행되는 결과? 비동기는 무조건 쓴다
    extraReducers: {
        [fetchMovies.fulfilled]: (state, action) => {
            //console.log(action.payload.Movies.Items[0].Items)
            console.log(action)
            // state.movies = action.payload.Movies.Items[0].Items

        },
        [checkMovie.fulfilled]: (state, action) => {
            console.log(action)
            state.msg ='Completed.................'
        }
    }
    
})

export const {clearMsg} = movieSlice.actions


export default movieSlice.reducer