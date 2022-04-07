import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import faker from "faker";

import logo from "./nigeria.png";

const t1 = { margin: 5, padding: 2 };
const b1 = { margin: 10, width: "95%" };

export default function Form() {
  const [values, setValues] = React.useState({
    name: "",
    age: ""
  });
  const handleChange = (prop) => (e) => {
    var val = e.target.value;
    var value = val.toUpperCase();
    setValues({ ...values, [prop]: value });
  };

  const handleClick = (e, id) => {
    e.preventDefault();

    switch (id) {
      case "demo":
        var name = faker.random.arrayElement(["Auwal", "Kande", "Ladidi"]);
        var age = faker.random.number({ min: 18, max: 30 });
        setValues({ name: name, age: age });
        break;

      case "submit":
        console.log("you click submit");
        break;
      default:
        break;
    }
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <div style={{ textAlign: "center" }}>
          <img src={logo} style={{ height: 70 }} />
        </div>
        <Typography variant="h4" component="h1" gutterBottom>
          Online Registration Form <br />
          <br />
        </Typography>

        <Paper elevation={3} style={{ width: 400, margin: 5, padding: 5 }}>
          <TextField
            value={values.name}
            fullWidth
            style={t1}
            id="name"
            name="name"
            label="Name"
            onChange={handleChange("name")}
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <br />
          <TextField
            value={values.Gender}
            fullWidth
            style={t1}
            id="Gender"
            name="Gender"
            label="Gender"
            onChange={handleChange("gender")}
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <br />
          <TextField
            value={values.age}
            fullWidth
            style={t1}
            id="age"
            name="age"
            label="Age"
            onChange={handleChange("age")}
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <br />
          <TextField
            value={values.phone_number}
            fullWidth
            style={t1}
            id="Phone_number"
            name="Phone_number"
            label="Phone_number"
            onChange={handleChange("Phone_number")}
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <br />
          <TextField
            value={values.address}
            fullWidth
            style={t1}
            id="address"
            name="address"
            label="Address"
            onChange={handleChange("address")}
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <br />
          <Button
            onClick={(e) => handleClick(e, "demo")}
            style={b1}
            variant="contained"
            color="success"
          >
            Demo
          </Button>
          <br />
          <br />
          <Button
            onClick={(e) => handleClick(e, "submit")}
            style={b1}
            variant="contained"
          >
            Submit
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}
