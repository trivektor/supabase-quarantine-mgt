import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase-client";

const useAuthSession = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.unsubscribe();
    };
  }, []);

  return session;
};

export default useAuthSession;
