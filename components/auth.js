import { Fragment, useState } from "react";
import { Button, FormControl, FormGroup, TextField } from "@material-ui/core";
import { supabase } from "../utils/supabase-client";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <p className="description">
        Sign in via magic link with your email below
      </p>
      <FormGroup>
        <TextField
          variant="outlined"
          color="primary"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            handleLogin(email);
          }}
          disabled={loading}
        >
          <span>{loading ? "Loading" : "Send magic link"}</span>
        </Button>
      </FormGroup>
    </Fragment>
  );
}
