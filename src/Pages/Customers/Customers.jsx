import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { Table } from "antd";

const Customers = () => {
  const columns = [
    {
      title: "Customer Name",
      dataIndex: "CustomerName",
    },
    {
      title: "Customer Number",
      dataIndex: "CustomerNumber",
    },
    {
      title: "Customer Address",
      dataIndex: "CustomerAddress",
    },
    {
      title: "Payment Type",
      dataIndex: "PaymentType",
    },
    {
      title: "Puchase Date",
      dataIndex: "PurchaseDate",
    },
    {
      title: "Payment Date",
      dataIndex: "PaymentDate",
    },
    {
      title: "Branch",
      dataIndex: "branch",
    },
  ];
  const data = [
    {
      CustomerName: "XYZ",
      CustomerNumber: 20000,
      CustomerAddress: 100,
      PurchaseDate: "2022-11-09",
      PaymentType: "Full",
      branch: "Multan Road",
    },
    {
      CustomerName: "XYZ",
      CustomerNumber: 20000,
      CustomerAddress: 100,
      PaymentType: "Installment",
      PurchaseDate: "2022-11-04",
      PaymentDate: "2022-11-09",

      branch: "College Road",
    },
    {
      CustomerName: "XYZ",
      CustomerNumber: 20000,
      CustomerAddress: 100,
      PaymentType: "Half Payment",
      PurchaseDate: "2022-11-05",
      PaymentDate: "2022-11-13",
      branch: "Samnabad",
    },
  ];
  return (
    <SideBar>
      <h2>Customers</h2>
      <Table dataSource={data} columns={columns} bordered />
    </SideBar>
  );
};

export default Customers;
