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

export default function Home() {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Button variant="contained" href="/locations/new" color="secondary">
          Add Location
        </Button>
      </Container>
    </Fragment>
  );
}
