"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

interface RegisterData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  // Simular verificación de token al cargar la app
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("auth-token");
        if (token) {
          // En producción aquí harías una llamada a tu API para verificar el token
          const mockUser: User = {
            id: "1",
            name: "Usuario Demo",
            email: "usuario@demo.com",
            avatar:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            phone: "987654321",
          };
          setUser(mockUser);
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        localStorage.removeItem("auth-token");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);

      // Simular llamada a API de login
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simular validación (en producción esto sería real)
      if (email === "demo@tuaviso.pe" && password === "demo123") {
        const mockUser: User = {
          id: "1",
          name: "Usuario Demo",
          email: email,
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          phone: "987654321",
        };

        setUser(mockUser);
        localStorage.setItem("auth-token", "mock-token-123");
        document.cookie = "auth-token=mock-token-123; path=/";

        return true;
      }

      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      setIsLoading(true);

      // Simular llamada a API de registro
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockUser: User = {
        id: Date.now().toString(),
        name: `${userData.name} ${userData.surname}`,
        email: userData.email,
        avatar: `https://ui-avatars.com/api/?name=${userData.name}+${userData.surname}&background=667eea&color=fff`,
      };

      setUser(mockUser);
      localStorage.setItem("auth-token", `mock-token-${Date.now()}`);
      document.cookie = `auth-token=mock-token-${Date.now()}; path=/`;

      return true;
    } catch (error) {
      console.error("Register error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth-token");
    document.cookie =
      "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    window.location.href = "/";
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
