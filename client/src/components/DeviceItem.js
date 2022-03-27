import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utills/consts";
// import star from '../assets/star.jpg'

const DeviceItem = ({ devices }) => {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => navigate(DEVICE_ROUTE + "/" + devices.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={devices.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Samsung</div>
          <div className="d-flex align-items-center ">
            <div>{devices.rating}</div>
          </div>
        </div>
        <div>{devices.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
