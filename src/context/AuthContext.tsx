import React, { createContext, useContext, useState, ReactNode } from 'react';
import { isAuthenticated, login as authServiceLogin, logout as authServiceLogout } from '../services/authService';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuth, setIsAuth] = useState<boolean>(isAuthenticated());

    const login = async (username: string, password: string) => {
        const success = await authServiceLogin(username, password);
        if (success) {
            setIsAuth(true);
        }
        return success;
    };

    const logout = () => {
        authServiceLogout();
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
