const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://elal:YCm0rRn8CZbGP3Cb@cluster0.jdv5r.mongodb.net/feedback-fso-AH"
  )
  .then(function () {
    console.log(" connection is succesfull ");
  });

app.listen(3009, () => {
  console.log("server create is successfull");
});
 