import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { getSession, type User } from "@/lib/auth";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  refresh: () => void;
};

const AuthContext = createContext<AuthContextValue>({ user: null, loading: false, refresh: () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => getSession());
  const [loading] = useState(false);

  const refresh = useCallback(() => {
    setUser(getSession());
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refresh }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}
