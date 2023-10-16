"use client";

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type AuthType = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

const initState: AuthType = {
  isOpen: false,
  setIsOpen: () => {},
};

export const AuthContext = createContext<AuthType>(initState);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <AuthContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
