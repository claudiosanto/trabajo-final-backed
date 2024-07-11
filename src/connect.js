import mongoose from "mongoose";
import config from "./config.js";

export default async function connectToDB() {

  try {
    await mongoose.connect(config.MONGO_DB_URI)
  } catch (err) {

  }


}

//conecta la base de datos 