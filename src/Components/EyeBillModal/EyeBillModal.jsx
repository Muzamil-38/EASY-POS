import { Modal } from "antd";
import React from "react";
import "./EyeBillModal.css";

const EyeBillModal = ({ eyeModal, setEyeModal }) => {
  return (
    <Modal
      title="Invoice Details"
      open={eyeModal}
      width={400}
      pagination={false}
      onCancel={() => {
        setEyeModal(false);
      }}
      footer={false}
    >
      <div className="Card">
        <div className="CardHeader">
          <h2 className="Logo">Madina Plastic Furniture</h2>
          <span>
            Number: <b>+923042844442</b>
          </span>
          <span>
            Address: <b>XYZ Dash Road</b>
          </span>
        </div>
        <div className="CardBody">
          <div className="Group">
            <span>Customer Name:</span>
            <span>
              <b>Ali</b>
            </span>
          </div>
          <div className="Group">
            <span>Customer Number:</span>
            <span>
              <b>+923042844442</b>
            </span>
          </div>
          <div className="Group">
            <span>Date Ordered:</span>
            <span>
              <b>23 Nov 2022</b>
            </span>
          </div>
          <div className="Group">
            <span>Total Amount:</span>
            <span>
              <b>20000</b>
            </span>
          </div>
        </div>
        <h4>Your Order</h4>
        {/* Card Footer */}
        <div className="CardFooter">
          <div className="Group">
            <span>Product ID:</span>
            <span>
              <b>xyz-123</b>
            </span>
          </div>
          <div className="Group">
            <span>Product:</span>
            <span>
              <b>Kids Chair</b>
            </span>
          </div>
          <div className="Group">
            <span>Color:</span>
            <span>
              <b>Black</b>
            </span>
          </div>
          <div className="Group">
            <span>QTY:</span>
            <span>
              <b>3</b>
            </span>
          </div>
          <div className="Group">
            <span>Price:</span>
            <span>
              <b>3000</b>
            </span>
          </div>
        </div>
        {/* Card Footer */}
        <div className="CardFooter">
          <div className="Group">
            <span>Product ID:</span>
            <span>
              <b>xyz-123</b>
            </span>
          </div>
          <div className="Group">
            <span>Product:</span>
            <span>
              <b>Kids Chair</b>
            </span>
          </div>
          <div className="Group">
            <span>Color:</span>
            <span>
              <b>White</b>
            </span>
          </div>
          <div className="Group">
            <span>QTY:</span>
            <span>
              <b>5</b>
            </span>
          </div>
          <div className="Group">
            <span>Price:</span>
            <span>
              <b>3500</b>
            </span>
          </div>
        </div>
        {/* Card Footer */}
        <div className="CardFooter">
          <div className="Group">
            <span>Product ID:</span>
            <span>
              <b>xyz-123</b>
            </span>
          </div>
          <div className="Group">
            <span>Product:</span>
            <span>
              <b>Kids Chair</b>
            </span>
          </div>
          <div className="Group">
            <span>Color:</span>
            <span>
              <b>Brown</b>
            </span>
          </div>
          <div className="Group">
            <span>QTY:</span>
            <span>
              <b>7</b>
            </span>
          </div>
          <div className="Group">
            <span>Price:</span>
            <span>
              <b>5000</b>
            </span>
          </div>
        </div>
        <div className="CardFooterTotal">
          <div className="Group">
            <h3>Total:</h3>
            <h3>
              <b>11500</b>
            </h3>
          </div>
        </div>
        <div className="FooterThanks">
          <span>Thank You for buying from us</span>
        </div>
      </div>
    </Modal>
  );
};

export default EyeBillModal;
