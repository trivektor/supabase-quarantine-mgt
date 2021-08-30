import useAuthSession from "../hooks/use-auth-session";
import Auth from "./auth";

const AuthRequired = ({ children }) => {
  const session = useAuthSession();

  if (session) {
    return children;
  }

  return <Auth />;
};

export default AuthRequired;
