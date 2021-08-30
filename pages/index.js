import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase-client";
import Auth from "../components/auth";

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  console.log(session);

  return (
    <Fragment>
      <Container maxWidth="lg">
        {session ? (
          <Button variant="contained" href="/locations/new" color="secondary">
            Add Location
          </Button>
        ) : (
          <Auth />
        )}
      </Container>
    </Fragment>
  );
}
