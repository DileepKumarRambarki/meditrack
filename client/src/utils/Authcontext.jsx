import { useContext, createContext, useState } from "react";

const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [isValid, setValid] = useState(
    () => localStorage.getItem("isValid") === "true"
  );

  const [role, setRole] = useState(
    localStorage.getItem("role") || ""
  );

  const [userId, setUserId] = useState(
    localStorage.getItem("userId") || ""
  );

  const login = ({ role, userId }) => {
    localStorage.setItem("isValid", "true");
    localStorage.setItem("role", role);
    localStorage.setItem("userId", userId);

    setRole(role);
    setUserId(userId);
    setValid(true);
  };

  const logout = () => {
    localStorage.clear();
    setValid(false);
    setRole("");
    setUserId("");
  };

  return (
    <Authcontext.Provider
      value={{
        isValid,
        role,
        userId,
        login,
        logout,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => useContext(Authcontext);
