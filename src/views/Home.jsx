import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center pt-5">
      <h1 className="mb-2">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <p className="mb-2">El lugar de los pasteles felices</p>
      <span className="cake">🎂</span>
    </Container>
  );
};

export default Home;
