import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { apiProvider } from "../providers/api-provider/ApiProviderFactory";

// *** ---- Interfaces ---------------------------------------------------------------------- *** //
interface User {
  name: string;
  lastName: string;
  email: string;
}

interface AuthenticationContextData {
  user: User;
  authentication: boolean
  login: (credentials: Credentials) => Promise<boolean>
  logout: () => Promise<void>
}

interface Credentials {
  email: string;
  password: string;
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {

      const user = localStorage.getItem('user');

      if (user) setUser(JSON.parse(user));

      setAuthentication(true);
    }
  }, []);

  const login = async (credentials: Credentials): Promise<boolean> => {
    const response = await apiProvider.login(credentials);

    if (response) {
      const {name, email, lastName} = response;

      setAuthentication(true);
      localStorage.setItem('user', JSON.stringify({name, email, lastName}));

      setUser({name, lastName, email});
      
      return true;
    }
    return false;
  }

  const logout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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
