"use client";

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type AuthType = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsRegistrationOpen: Dispatch<SetStateAction<boolean>>;
  isRegistrationOpen: boolean;
  setIsForgotPasswordOpen: Dispatch<SetStateAction<boolean>>;
  isForgotPasswordOpen: boolean;
  setIsEnroll: Dispatch<SetStateAction<boolean>>;
  isEnroll: boolean;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
  isAdmin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  isLogin: boolean;
};

const initState: AuthType = {
  isOpen: false,
  setIsOpen: () => { },
  isRegistrationOpen: false,
  setIsRegistrationOpen: () => { },
  isForgotPasswordOpen: false,
  setIsForgotPasswordOpen: () => { },
  setIsEnroll: () => { },
  isEnroll: false,
  setIsAdmin: () => { },
  isAdmin: false,
  setIsLogin: () => { },
  isLogin: false,
};

export const AuthContext = createContext<AuthType>(initState);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] =
    useState<boolean>(false);
  const [isEnroll, setIsEnroll] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isRegistrationOpen,
        setIsRegistrationOpen,
        isForgotPasswordOpen,
        setIsForgotPasswordOpen,
        isEnroll,
        setIsEnroll,
        isAdmin,
        setIsAdmin,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
