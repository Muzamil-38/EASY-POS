 import React from "react";
import { useState } from "react";
import { Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";

import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState(true);

  const navigate = useNavigate();
  const handleForm = (value) => {
    console.log(value);
  };

  const handleRoleSelection = (selectedRole) => {
    if (selectedRole === "Seller") {
      setBranch(false);
    } else {
      setBranch(true);
    }
    console.log(selectedRole);
    console.log(branch);
  };
  return (
    <div className="Login-Form">
      <h1>Easy</h1>
      <p>Created by MMR</p>
      <div className="Form-Group">
        <Form layout="vertical" onFinish={handleForm}>
          <FormItem
            name="emailAddress"
            label="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          >
            <Input />
          </FormItem>
          <FormItem name="role" label="Role">
            <Select onChange={handleRoleSelection}>
              <Select.Option value="Admin">Admin</Select.Option>
              <Select.Option value="Seller">Seller</Select.Option>
            </Select>
          </FormItem>
          <FormItem name="branch" label="Branch">
            <Select disabled={branch}>
              <Select.Option value="Multan Road">Multan Road</Select.Option>
              <Select.Option value="Samnabad">Samnabad</Select.Option>
              <Select.Option value="College Road">College Road</Select.Option>
            </Select>
          </FormItem>
          <FormItem
            name="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          >
            <Input type="password" />
          </FormItem>
          <button
            className="Login-Btn"
            type="submit"
            onClick={() => navigate("/home")}
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
