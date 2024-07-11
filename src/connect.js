import mongoose from "mongoose";
import config from "./config";

export default async function connectDb() {

  try {
    await mongoose.connect(config.MONGO_DB_URI)
    console.log("conectado a MONGO_DB)ATLAS")
  } catch (error) {
    console.error("no se pudo conectar la base de datos")
  }


}


//conecta la base de datos 