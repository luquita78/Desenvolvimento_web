const mongoose = require("mongoose");

const connectionDb = () => {
  mongoose
    .connect(
      process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Conectado ao banco de dados"))
    .catch((err) => console.log(err));
};

module.exports = connectionDb;
