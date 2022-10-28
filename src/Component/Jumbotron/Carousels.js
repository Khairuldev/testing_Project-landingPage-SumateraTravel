import Carousel from "react-bootstrap/Carousel";
import { Gambar1, Gambar2, Gambar3, Gambar4, Gambar5, Gambar6 } from "../../Assets/TempatWisata";

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Gambar1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <a className="btn btn-primary btn-lg font-weight-bold" href="/" role="button">
            Selengkapnya
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Gambar2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a className="btn btn-primary btn-lg font-weight-bold" href="/" role="button">
            Selengkapnya
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Gambar3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <a className="btn btn-primary btn-lg font-weight-bold" href="/" role="button">
            Selengkapnya
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Gambar4} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <a className="btn btn-primary btn-lg font-weight-bold" href="/" role="button">
            Selengkapnya
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Gambar5} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <a className="btn btn-primary btn-lg font-weight-bold" href="/" role="button">
            Selengkapnya
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Gambar6} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <a className="btn btn-primary btn-lg font-weight-bold" href="/" role="button">
            Selengkapnya
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
