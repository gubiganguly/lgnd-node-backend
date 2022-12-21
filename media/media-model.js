import mongoose from "mongoose";
import mediaSchema from "./media-schema.js";

const mediaModel = mongoose.model('MediaModel', mediaSchema);

export default mediaModel