import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the User type. You can adjust it according to your actual user shape.
type User = {
    id: number;
    name: string;
} | null;

type UserContextType = {
    user: User;
    setUser: (user: User) => void;
    logout: () => void;
};

// Create the UserContext with default value undefined
export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Load user from localStorage
        }
    }, []);

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Optional: remove user from localStorage upon logout
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};
