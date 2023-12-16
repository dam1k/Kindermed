import {create} from "zustand";
interface IActiveDepartments {
    activeDepartments: string[];
    setActiveDepartments: (newActiveDepartments:string[]) => void;
}

export const useActiveDepartments = create<IActiveDepartments>((set) => ({
    activeDepartments: [],
    setActiveDepartments: (newActiveDepartments:string[]) => set({activeDepartments: newActiveDepartments})
}))