import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { devices } = useContext(Context);
  return (
    <Row className="d-flex">
      
      {devices.brands.map((brand) => (
        <Card
        // style={{ width: "10rem" }}
          style={{ cursor: "pointer", width: "10rem"}}
          key={brand.id}
          className="p-3"
          onClick={() => devices.setSelectedBrand(brand)}
          border={brand.id === devices.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
      
    </Row>
  );
});

export default BrandBar;
