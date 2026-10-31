const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("Welcome to my server");
});

app.get("/about", (request, response) => {
  response.json({
    name: "Avula Raju",
    registrationNumber: "252U1R1017",
    section: "CSE CORE",
  });
});

app.get("/time", (request, response) => {
  response.send(new Date().toISOString());
});

app.use((request, response) => {
  response.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
