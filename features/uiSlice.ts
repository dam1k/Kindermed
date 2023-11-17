import {createSlice} from "@reduxjs/toolkit"

interface IinitialState {
    width:number
}

const initialState:IinitialState = {
    width: 0
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        updateWidth: (state) => {
            state.width = window.innerWidth
        }
    }
})

export const {updateWidth} = uiSlice.actions
export default uiSlice.reducer