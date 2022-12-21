import mongoose from "mongoose";
import viewsSchema from "./views-schema.js";

const viewsModel = mongoose.model('ViewsModel', viewsSchema)

export default viewsModel