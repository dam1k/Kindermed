import {create} from "zustand";
interface IActiveArticles {
    activeArticles: string[];
    setActiveArticles: (newActiveArticles:string[]) => void;
}

export const useActiveArticles = create<IActiveArticles>((set) => ({
    activeArticles: [],
    setActiveArticles: (newActiveArticles:string[]) => set({activeArticles: newActiveArticles})
}))