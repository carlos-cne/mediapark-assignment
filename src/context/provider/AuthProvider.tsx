import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState
} from "react";

type Props = {
  children: ReactNode;
};

type ContextProps = {
  token: string | null;
  handleSetToken: (tokenValue: string) => void;
  handleRemoveToken: () => void;
};

const AuthContext = createContext<ContextProps>({
  token: null,
  handleSetToken: () => {},
  handleRemoveToken: () => {}
});

export default AuthContext;

export const AuthProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const handleSetToken = (tokenValue: string) => {
    setToken(tokenValue);
    window.localStorage.setItem("@mediapark/token", tokenValue);
  };

  const handleRemoveToken = () => {
    setToken(null);
    localStorage.removeItem("@mediapark/token");
  };

  useEffect(() => {
    const currentToken = localStorage.getItem("@mediapark/token");
    setToken(currentToken);
  }, []);

  return (
    <AuthContext.Provider value={{ token, handleRemoveToken, handleSetToken }}>
      {children}
    </AuthContext.Provider>
  );
};
