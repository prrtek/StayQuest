import React, { useContext } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../api-clients";

// Define the type for your context
interface AppContext {
  isLoggedIn: boolean;
}

// Create the context with initial value undefined
const AppContext = React.createContext<AppContext | undefined>(undefined);

// Define the provider component props interface
interface AppContextProviderProps {
  children: React.ReactNode;
}

// Define the provider component
export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  // Use the useQuery hook to fetch data
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  // Compute isLoggedIn based on isError
  const isLoggedIn = !isError;

  // Provide the context value to children
  return (
    <AppContext.Provider value={{ isLoggedIn }}>{children}</AppContext.Provider>
  );
};

// Custom hook to consume the context
export const useAppContext = (): AppContext => {
  // Use the useContext hook to access the context
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
