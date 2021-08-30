import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography>
            <Link href="/">Quarantine Management</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg"></Container>
    </Fragment>
  );
}
