import React from "react";
import { Col, Row } from "antd";
import SideBar from "../../Components/SideBar/SideBar";
import CategoryMenu from "../../Components/CategoryMenu/CategoryMenu";
import Product from "../../Components/Product/Product";

const Home = () => {
  return (
    <SideBar>
      <CategoryMenu />
      <Row>
        <Col xs={24} sm={6} md={12} lg={6}>
          <Product />
        </Col>
        <Col xs={24} sm={6} md={12} lg={6}>
          <Product />
        </Col>
        <Col xs={24} sm={6} md={12} lg={6}>
          <Product />
        </Col>
        <Col xs={24} sm={6} md={12} lg={6}>
          <Product />
        </Col>
        <Col xs={24} sm={6} md={12} lg={6}>
          <Product />
        </Col>
        <Col xs={24} sm={6} md={12} lg={6}>
          <Product />
        </Col>
        <Col xs={24} sm={6} md={12} lg={6}>
          <Product />
        </Col>
      </Row>
    </SideBar>
  );
};

export default Home;
