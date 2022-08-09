const mongoose = require("mongoose");

const connectionDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:1234@cluster0.uterh.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Conectado ao banco de dados"))
    .catch((err) => console.log(err));
};

module.exports = connectionDb;
