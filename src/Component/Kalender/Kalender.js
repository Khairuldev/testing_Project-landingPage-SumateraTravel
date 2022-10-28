import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./style.css";

const Calender = () => {
  return (
    <Container>
      <Row gap={2}>
        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={12} sm={6} lg={4}>
          {["Success"].map((variant) => (
            <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === "light" ? "dark" : "white"} style={{ width: "80%" }} className="m-2">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Calender;
