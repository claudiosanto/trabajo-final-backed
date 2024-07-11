import mongoose from "mongoose";
import config from "./config.js";

export default async function connectDB() {
  try {
    await mongoose.connect(config.MONGO_DB_URI)
  } catch (error) {

  }




}

//conecta la base de datos 