import React from "react";
import { Card } from "antd";
import "./Product.css";

const { Meta } = Card;

const Product = () => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
        marginBottom: 30,
      }}
      cover={
        <img
          style={{ height: 200 }}
          src="https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12638962-0-M.jpg?4"
          alt="https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12638962-0-M.jpg?4"
        />
      }
    >
      <Meta title="Classic Chair" description="5000" />
      <button className="Product-Btn">Add To Cart</button>
    </Card>
  );
};

export default Product;
