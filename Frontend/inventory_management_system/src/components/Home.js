import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DarkVariantExample() {
  return (
    <>
      <Carousel data-bs-theme="light">
        <Carousel.Item>
          <img
            width="100"
            height="600"
            className="d-block w-100"
            src="../img/img2.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100"
            height="600"
            className="d-block w-100"
            src="../img/img1.png"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100"
            height="600"
            className="d-block w-100"
            src="../img/img3.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div
        className="cards"
        class="d-flex justify-content-center gap-5 mx-auto p-5 align-middle bd-highlight"
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../img/img1.png" />
          <Card.Body>
            <Card.Title class="text-danger font-weight-bold">IMS</Card.Title>
            <Card.Text>
            An inventory management system is the backbone of any efficient business operation, responsible for overseeing the flow of goods from supplier to customer.
            </Card.Text>
            <Button variant="primary">More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} class="px-2">
          <Card.Img variant="top" src="../img/img2.jpg" />
          <Card.Body>
            <Card.Title class="text-danger font-weight-bold">About</Card.Title>
            <Card.Text>
            It serves as a centralized platform for tracking and organizing ensuring that businesses have the right products on hand, at the right time, and in the right quantities. 
            </Card.Text>
            <Button variant="primary">More</Button>
          </Card.Body>
        </Card>
      </div>
      <footer className="footer mt-auto py-3 bg-danger text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About</h5>
              <p>
                Learn more about our inventory management system and how it can
                help streamline your business operations.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: info@inventorymanagement.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="/#">Facebook</a>
                </li>
                <li className="list-inline-item">
                  <a href="/#">Twitter</a>
                </li>
                <li className="list-inline-item">
                  <a href="/#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="bg-light" />
          <p className="text-white text-center">
            &copy; 2024 Inventory Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default DarkVariantExample;
