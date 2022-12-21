import mongoose from 'mongoose'

const usersSchema = mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    role: {type: String, enum: ['ADMIN', 'USER']} 
}, {collection: 'users'})

export default usersSchema