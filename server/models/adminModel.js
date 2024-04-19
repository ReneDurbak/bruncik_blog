const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { SHA256 } = require("crypto-js");

const adminSchema = new Schema({
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

adminSchema.methods.comparePassword = async function (inputPassword) {
  const hashedInputPassword = SHA256(inputPassword).toString();

  return (await this.password) === hashedInputPassword;
};

module.exports = mongoose.model("admin", adminSchema);
