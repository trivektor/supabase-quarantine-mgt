import { Container } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import { useAuthSession } from "../hooks";

export default function Home() {
  useAuthSession();

  return (
    <Container maxWidth="lg">
      <div />
    </Container>
  );
}
