import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="text-center pt-5">
      <p className="fs-2">
        La URL que intentas ingresar <span className="fw-bold">no existe</span>{" "}
      </p>
    </Container>
  );
};

export default NotFound;
