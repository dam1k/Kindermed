import {create} from "zustand";
interface IuseWidth {
    width: number;
    setWidth: (newWidth:number) => void;
}

export const useWidth = create<IuseWidth>((set) => ({
    width: window.innerWidth,
    setWidth: (newWidth:number) => set({width: newWidth})
}))