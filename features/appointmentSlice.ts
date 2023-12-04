import {createSlice} from  "@reduxjs/toolkit"

const appointmentSlice = createSlice({
    name: "appointment",
    initialState: {
        isOpen: true
    },
    reducers: {
        toggleModal: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const {toggleModal} = appointmentSlice.actions
export default appointmentSlice.reducer