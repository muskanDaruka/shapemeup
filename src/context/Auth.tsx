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
  setIsRegistrationOpen: Dispatch<SetStateAction<boolean>>;
  isRegistrationOpen: boolean;
  setIsForgotPasswordOpen: Dispatch<SetStateAction<boolean>>;
  isForgotPasswordOpen: boolean;
};

const initState: AuthType = {
  isOpen: false,
  setIsOpen: () => { },
  isRegistrationOpen: false,
  setIsRegistrationOpen: () => { },
  isForgotPasswordOpen: false,
  setIsForgotPasswordOpen: () => { },
};

export const AuthContext = createContext<AuthType>(initState);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState<boolean>(false);
  return (
    <AuthContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isRegistrationOpen,
        setIsRegistrationOpen,
        isForgotPasswordOpen,
        setIsForgotPasswordOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
