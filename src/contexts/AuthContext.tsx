import {FirebaseAuthTypes, getAuth} from '@react-native-firebase/auth';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface AuthContextType {
  user: FirebaseAuthTypes.User | null;
  initializing: boolean;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState(true);

  // Handle user authentication state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    console.log("onAuthStateChanged:", user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // Cleanup on unmount
  }, []);
  return (
    <AuthContext.Provider value={{user, initializing}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
