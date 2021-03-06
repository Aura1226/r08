

import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name:'Counter',
    initialState: {
        count:10
    },
    reducers: {
        inc: (state, action) => {
            console.log("inc")
            state.count += 1
        },
        dec: (state) => {
            console.log("dec")
            state.count -= 1
        }
    }

})
//비동기
// export const changeIncAsync = () => (dispatch) =>{
//     console.log("changeIncAsync")
//     setTimeout(() => dispatch(inc()), 3000)
// } 

export const { inc,dec } = counterSlice.actions

export const countValue = (state) => state.counter.count

export default counterSlice.reducer