export interface User {
  id: number;
  name: string;
  email: string;
  role: "student" | "teacher" | "admin";
}

export interface AuthState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}