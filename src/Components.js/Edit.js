import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Employees from "./Employees";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  let index = Employees.map((emp) => emp.id).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Employees[index];
    a.Name = name;
    a.Age = age;

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <FormControl
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <FormControl
            type="text"
            placeholder="Enter Age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Button onClick={handleSubmit}>Update</Button>
      </Form>
      ;
    </div>
  );
}

export default Edit;
