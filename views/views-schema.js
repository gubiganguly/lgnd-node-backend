import mongoose from 'mongoose'

const viewsSchema = mongoose.Schema({
    content: {type: mongoose.Schema.Types.ObjectId, ref: 'MediaModel'},
    viewer: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    timestamp: Number,
    finished: Boolean
}, {collection: 'views'})

export default viewsSchema