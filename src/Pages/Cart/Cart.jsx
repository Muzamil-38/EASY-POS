import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { Table } from "antd";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

import "./Cart.css";
import BillModal from "../../Components/BillModal/BillModal";

const Cart = () => {
  const [billPopUp, setBillPopUp] = useState(false);

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
      title: "Product Price",
      dataIndex: "ProductPrice",
    },
    {
      title: "Product Quantity",
      dataIndex: "_id",
      render: () => (
        <div>
          <MinusCircleOutlined className="Cart-Minus" />
          <strong className="Cart-Quantity">0</strong>
          <PlusCircleOutlined className="Cart-Plus" />
        </div>
      ),
    },

    {
      title: "Action",
      dataIndex: "_id",
      render: () => <DeleteOutlined className="Cart-Deleted" />,
    },
  ];
  const data = [
    {
      ProductID: "xyz123",
      ProductName: "XYZ",
      ProductPrice: 20000,
      ProductQuantity: 2,
    },
    {
      ProductID: "123zyx",
      ProductName: "XYZ",
      ProductPrice: 20000,
      ProductQuantity: 1,
    },
    {
      ProductID: "123xyz",
      ProductName: "XYZ",
      ProductPrice: 20000,
      ProductQuantity: 5,
    },
  ];

  return (
    <SideBar>
      <h2>Cart</h2>
      <Table dataSource={data} columns={columns} bordered />
      <div className="SubTotal">
        <h2>
          Sub Total: <span>{(5.67).toFixed(2)}</span>
        </h2>
        <button className="Invoice-Btn" onClick={() => setBillPopUp(true)}>
          Create Invoice
        </button>
      </div>
      <BillModal billPopUp={billPopUp} setBillPopUp={setBillPopUp} />
    </SideBar>
  );
};

export default Cart;
