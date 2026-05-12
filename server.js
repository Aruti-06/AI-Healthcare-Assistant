const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/ask-ai", (req, res) => {

  const question =
    req.body.question.toLowerCase();

  let reply = "";

  if (question.includes("fever")) {

    reply =
      "Possible fever detected. Drink water and take rest.";
  }

  else if (
    question.includes("cough")
  ) {

    reply =
      "Warm water and cough syrup may help.";
  }

  else if (
    question.includes("headache")
  ) {

    reply =
      "Headache detected. Proper rest may help.";
  }

  else if (
    question.includes("stomach")
  ) {

    reply =
      "Drink water and avoid oily food.";
  }

  else {

    reply =
      "Please consult doctor.";
  }

  res.json({
    answer: reply,
  });
});

app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  );
});