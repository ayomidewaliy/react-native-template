import {createContext} from 'react';

interface AuthContextProps {
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);
