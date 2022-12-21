import mongoose from 'mongoose'

const mediaSchema = mongoose.Schema({
    title: {type: String, required: true},
    thumbnail: String,
    producer: String,
    length: Number,
    lessons: Array,
    category: String,
    file: {type: String, required: true},
    description: String,
    rating: Number,
    type: {type: String, enum: ['VIDEO', 'AUDIO']}
}, {collection: 'media'})

export default mediaSchema