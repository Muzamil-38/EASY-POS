import React, { useState } from "react";
import { Form, Input, Modal, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { DatePicker } from "antd";
import "./BillModal.css";

const BillModal = ({ billPopUp, setBillPopUp }) => {
  const handleDatePicker = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleForm = (value) => {
    console.log(value);
  };

  return (
    <Modal
      visible={billPopUp}
      footer={false}
      onCancel={() => setBillPopUp(false)}
      title="Create Invoice"
    >
      <Form layout="vertical" onFinish={handleForm}>
        <FormItem name="customerName" label="Customer Name">
          <Input />
        </FormItem>
        <FormItem name="customerNumber" label="Customer Number">
          <Input type="number" />
        </FormItem>
        <FormItem name="customerAddress" label="Customer Address">
          <Input />
        </FormItem>
        <FormItem name="paymentType" label="Payment Type">
          <Select>
            <Select.Option value="Full Payment">Full Payment</Select.Option>
            <Select.Option value="Half Payment">Half Payment</Select.Option>
          </Select>
        </FormItem>

        <FormItem name="datePicker" label="Next Payment Date">
          <DatePicker onChange={handleDatePicker} picker="date" />
        </FormItem>
        <div className="Total">
          <span>Total: {(200).toFixed(2)}</span>
        </div>
        <button className="GenerateInvoice-Btn" type="submit">
          Generate Invoice
        </button>
      </Form>
    </Modal>
  );
};

export default BillModal;
