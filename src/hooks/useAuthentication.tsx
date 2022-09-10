import { createContext, ReactNode, useContext, useState } from "react";

// *** ---- Interfaces ---------------------------------------------------------------------- *** //
interface User {
  name: string;
  lastName: string;
  email: string;
}

interface AuthenticationContextData {
  user: User;
  authentication: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
}

// ---------------------------------------------------------------------------------------------- //
interface AuthenticationProps {
  children: ReactNode;
}

// *** ---- implementations ----------------------------------------------------------------- *** //
const AuthenticationContext = 
  createContext<AuthenticationContextData>({} as AuthenticationContextData);

export const AuthenticationProvider = ({children}: AuthenticationProps) => {
  const [authentication, setAuthentication] = useState(false);
  const [user, setUser] = useState({name: '', lastName: '', email: ''});

  const login = async () => {
    setAuthentication(true);
    setUser({name: 'Huam', lastName: 'Benvenutti', email: 'huambenvenutti@gmail.com'})
  }

  const logout = async () => {
    setAuthentication(false);
    setUser({name:'', lastName: '', email: ''});
  }

  return (
    <AuthenticationContext.Provider value={{authentication, user, login, logout}}>
      {children}
    </AuthenticationContext.Provider>
  )
};

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);

  return context;
}
