import {create} from "zustand";

interface IAppointmentModal {
    isOpen: boolean;
    closeModal: () => void;
    openModal: () => void;
}

export const useAppointmentModal = create<IAppointmentModal>((set) => ({
    isOpen: false,
    closeModal: () => set({isOpen: false}),
    openModal: () => set({isOpen: true}),
}))