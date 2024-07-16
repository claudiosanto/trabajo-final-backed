import mongoose from "mongoose";
import config from "./config.js";

export default async function conectDb() {

  try {
    await mongoose.conect(config.MONGO_DB_URI)
    console.log('conect a mongoDbAtlas')
  } catch (error) {
    console.error('no se conecto ala base', error)
  }


}

//conecta la base de datos 