import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueid = ids.slice(0, 8);

    let a = name;
    let b = age;

    Employees.push({ id: uniqueid, Name: a, Age: b });

    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <FormControl
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <FormControl
            type="text"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default Add;
