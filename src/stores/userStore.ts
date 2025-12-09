import { create } from "zustand";
import type { CurrentUserDto } from "../api/hub-api/__openapi-generated";

type UserStore = {
    currentUser: CurrentUserDto | null;
    setCurrentUser: (user: CurrentUserDto | null) => void;
    clearCurrentUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
    currentUser: null,
    setCurrentUser: (user) => set({ currentUser: user }),
    clearCurrentUser: () => set({ currentUser: null }),
}));
