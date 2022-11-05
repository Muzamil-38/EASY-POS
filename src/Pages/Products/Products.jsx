import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./Products.css";
import ProductModal from "../../Components/ProductModal/ProductModal";

const Products = () => {
  const [popModal, setPopModal] = useState(false);
  const [eidtProduct, setEditProduct] = useState(false);

  const columns = [
    {
      title: "Product ID",
      dataIndex: "ProductID",
    },
    {
      title: "Product Image",
      dataIndex: "ProductImage",
      render: () => (
        <img
          src="https://static-01.daraz.pk/original/207c6f89b3a27fd455e43b6072074256.jpg"
          height={60}
          width={60}
        />
      ),
    },
    {
      title: "Product Name",
      dataIndex: "ProductName",
    },
    {
      title: "Product Color",
      dataIndex: "ProductColor",
    },
    {
      title: "Product Price",
      dataIndex: "ProductPrice",
    },
    {
      title: "Product Stock",
      dataIndex: "ProductStock",
    },

    {
      title: "Action",
      dataIndex: "_id",
      render: () => (
        <>
          <DeleteOutlined className="Product-Deleted" />
          <EditOutlined
            className="Product-Edited"
            onClick={() => {
              setEditProduct(true);
              setPopModal(true);
            }}
          />
        </>
      ),
    },
  ];
  const data = [
    {
      ProductID: "xyz123",
      ProductName: "XYZ",
      ProductColor: "White",
      ProductPrice: 20000,
      ProductStock: 100,
    },
    {
      ProductID: "123zyx",
      ProductName: "XYZ",
      ProductColor: "Orange",
      ProductPrice: 20000,
      ProductStock: 100,
    },
    {
      ProductID: "123xyz",
      ProductName: "XYZ",
      ProductColor: "Pink",
      ProductPrice: 20000,
      ProductStock: 100,
      branch: "Samnabad",
    },
  ];
  return (
    <SideBar>
      <h2>Products</h2>
      <button className="Add-New" onClick={() => setPopModal(true)}>
        Add New
      </button>
      <Table dataSource={data} columns={columns} bordered />
      {popModal && (
        <ProductModal
          setPopModal={setPopModal}
          popModal={popModal}
          eidtProduct={eidtProduct}
          setEditProduct={setEditProduct}
        />
      )}
    </SideBar>
  );
};

export default Products;
