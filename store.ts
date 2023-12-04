import {configureStore} from "@reduxjs/toolkit";
import ui from "./features/uiSlice";
import appointment from "@/features/appointmentSlice";

export const store = configureStore({
    reducer: {
        ui,
        appointment
    }
})

export type RootState = ReturnType<typeof store.getState>