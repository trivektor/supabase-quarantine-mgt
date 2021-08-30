import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link";
import { Fragment } from "react";

export default function Layout({ children }) {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography>
            <Link href="/">Quarantine Management</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <main>{children}</main>
      </Container>
    </Fragment>
  );
}
