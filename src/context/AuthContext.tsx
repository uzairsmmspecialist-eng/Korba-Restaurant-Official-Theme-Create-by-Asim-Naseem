import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Delivered' | 'Processing' | 'Cancelled';
  items: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  orders: Order[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ORD-7721',
      date: '2024-02-15',
      total: 2450,
      status: 'Delivered',
      items: ['Beef Nihari', 'Garlic Naan', 'Sweet Lassi']
    },
    {
      id: 'ORD-8812',
      date: '2024-01-20',
      total: 1200,
      status: 'Delivered',
      items: ['Chicken Karahi', 'Tandoori Roti']
    }
  ]);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('korba_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login
    const mockUser: User = {
      id: 'u1',
      name: 'John Doe',
      email: email,
      phone: '+92 300 1234567',
      address: 'House 42, Sector A, Noshahra Cantt'
    };
    setUser(mockUser);
    localStorage.setItem('korba_user', JSON.stringify(mockUser));
  };

  const signup = async (name: string, email: string, password: string) => {
    // Mock signup
    const mockUser: User = {
      id: 'u' + Math.random(),
      name: name,
      email: email
    };
    setUser(mockUser);
    localStorage.setItem('korba_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('korba_user');
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updated = { ...user, ...data };
      setUser(updated);
      localStorage.setItem('korba_user', JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateProfile, orders }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
