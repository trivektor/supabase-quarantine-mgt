import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import Link from "next/link";
import { Fragment } from "react";
import { useAuthSession } from "../hooks";

export default function Layout({ children }) {
  const session = useAuthSession();

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link href="/">Quarantine Management</Link>
          </Typography>{" "}
          {session ? (
            <Fragment>
              <Button color="inherit" size="small" href="/profiles/edit">
                Edit Profile
              </Button>{" "}
              <Button color="inherit" size="small">
                Logout
              </Button>
            </Fragment>
          ) : (
            <Button color="inherit" href="/login" size="small">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Container>
        <main style={{ marginTop: 20 }}>{children}</main>
      </Container>
    </Fragment>
  );
}
