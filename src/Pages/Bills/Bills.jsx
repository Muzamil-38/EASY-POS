import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import "./Bills.css";
import EyeBillModal from "../../Components/EyeBillModal/EyeBillModal";

const Bills = () => {
  const [eyeModal, setEyeModal] = useState(false);

  const columns = [
    {
      title: "Order Number",
      dataIndex: "OrderNumber",
    },
    {
      title: "Customer Name",
      dataIndex: "CustomerName",
    },
    {
      title: "Customer Number",
      dataIndex: "CustomerNumber",
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
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Puchase Date",
      dataIndex: "PurchaseDate",
    },
    {
      title: "Payment Type",
      dataIndex: "PaymentType",
    },
    {
      title: "Remaining Amount",
      dataIndex: "RemainingAmount",
    },

    {
      title: "Payment Date",
      dataIndex: "PaymentDate",
    },

    {
      title: "Action",
      dataIndex: "_id",
      render: () => (
        <>
          <EyeOutlined
            className="Eye-Edited"
            onClick={() => setEyeModal(true)}
          />
        </>
      ),
    },
  ];

  const data = [
    {
      OrderNumber: "abc-879",
      CustomerName: "Ali",
      CustomerNumber: "090078601",
      ProductName: "Baby Plastic Chair",
      ProductColor: "Brown",
      amount: 4000,
      quantity: 65,
      PurchaseDate: "2022-11-09",
      PaymentType: "Full",
    },
    {
      OrderNumber: "abc-879",
      CustomerName: "Raza",
      CustomerNumber: "090078601",
      ProductName: "Baby Plastic Chair",
      ProductColor: "Red",
      amount: 2000,
      quantity: 65,
      PurchaseDate: "2022-11-04",
      PaymentType: "Half Payment",
      RemainingAmount: 1000,
      PaymentDate: "2022-11-09",
    },
    {
      OrderNumber: "abc-879",
      CustomerName: "Imad",
      CustomerNumber: "090078601",
      ProductName: "Baby Plastic Chair",
      ProductColor: "Blue",
      amount: 2000,
      quantity: 65,
      PurchaseDate: "2022-11-05",
      PaymentType: "Half Payment",
      RemainingAmount: 1000,
      PaymentDate: "2022-11-13",
    },
  ];
  return (
    <SideBar>
      <h2>Bills</h2>
      <Table dataSource={data} columns={columns} bordered />
      <EyeBillModal eyeModal={eyeModal} setEyeModal={setEyeModal} />
    </SideBar>
  );
};

export default Bills;
