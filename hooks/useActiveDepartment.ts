import {create} from "zustand";
interface IActiveDepartment {
    activeDepartment: string;
    setActiveDepartment: (newActiveDepartment:string) => void;
}

export const useActiveDepartment = create<IActiveDepartment>((set) => ({
    activeDepartment: "",
    setActiveDepartment: (newActiveDepartment:string) => set({activeDepartment: newActiveDepartment})
}))