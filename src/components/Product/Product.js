import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";

const Product = ({ item }) => {
  const { id, title, category, image } = item;
  let history = useHistory();
  const handleDetails = () => {
    history.push(`/ProductDetails/${id}`);
  };

  return (
    <>
      <Card style={{ width: "18rem", margin: "auto", marginTop: "35px" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "300px", weight: "250px" }}
        />
        <Card.Body>
          <code>{category.toUpperCase()}</code>
          <Card.Text>{title}</Card.Text>
          <Button onClick={() => handleDetails(id)} variant="primary">
            Details
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
