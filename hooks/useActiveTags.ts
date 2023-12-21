import {create} from "zustand";
interface IActiveTags {
    activeTags: string[];
    setActiveTags: (newActiveTags:string[]) => void;
}

export const useActiveTags = create<IActiveTags>((set) => ({
    activeTags: [],
    setActiveTags: (newActiveTags:string[]) => set({activeTags: newActiveTags})
}))