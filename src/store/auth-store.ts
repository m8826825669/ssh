import { create } from "zustand";

import { AuthState } from "@/src/types/auth.types";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  login: (user, token) =>
    set({
      user,
      token,
    }),

  logout: () =>
    set({
      user: null,
      token: null,
    }),
}));