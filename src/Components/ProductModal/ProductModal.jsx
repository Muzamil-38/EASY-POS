import React from "react";
import { Form, Input, Modal, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Button, message, Upload } from "antd";
import "./ProductModal.css";

const props = {
  name: "file",
  action: "http://localhost:3000/products",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const ProductModal = ({
  popModal,
  setPopModal,
  eidtProduct,
  setEditProduct,
}) => {
  const handleForm = (value) => {
    console.log(value);
  };
  return (
    <Modal
      title={`${eidtProduct !==null ? "Edit Product" :"ADD NEW PRODUCT"}` }
      open={popModal}
      onCancel={() => {setEditProduct(null); setPopModal(false)}}
      footer={false}
    >
      <Form layout="vertical" onFinish={handleForm}>
        <FormItem name="productID" label="Product ID">
          <Input />
        </FormItem>
        <FormItem name="productImage" label="Product Image">
          <Upload {...props}>
            <Button>Upload Image</Button>
          </Upload>
        </FormItem>
        <FormItem name="productCategory" label="Product Category">
          <Select>
            <Select.Option value="Plastic Chair">Plastic Chair</Select.Option>
            <Select.Option value="Form">Form</Select.Option>
            <Select.Option value="Electronics">Electronics</Select.Option>
          </Select>
        </FormItem>
        <FormItem name="productName" label="Product Name">
          <Input />
        </FormItem>
        <FormItem name="productPrice" label="Product Price">
          <Input />
        </FormItem>
        <FormItem name="productStock" label="Product Stock">
          <Input />
        </FormItem>
        <button className="Add-Btn" type="submit">
          ADD
        </button>
      </Form>
    </Modal>
  );
};

export default ProductModal;
