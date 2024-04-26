const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://rushabhkoletiwar774:DYPQAUTpg9frSNUw@cluster0.jhbiyyx.mongodb.net/IMS";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
