import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/star.jpg";

const DevicePage = () => {
  const device = {
    id: 3,
    name: "Iphone 12 Pro",
    price: 110000,
    rating: 5,
    img: "https://a.allegroimg.com/original/1156ca/6d98a4dc455f9d2b4cd10535b0c2/Apple-iPhone-12-Pro-Max-128-GB-Gold",
  };
  const description = [
    { id: 1, title: "Оперативная память", description: "5 гб" },
    { id: 2, title: "Камера", description: "12 мп" },
    { id: 3, title: "Процессор", description: "пентиум 3" },
    { id: 4, title: "Кол-во ядер", description: "2" },
    { id: 5, title: "Аккумулятор", description: "4000" },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column">
            <h2>{device.name}</h2>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price}</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-3">
        <h1>Характеристики</h1>
        {description.map((info, index) => 
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;
