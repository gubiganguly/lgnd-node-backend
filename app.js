import express from 'express'
import session from 'express-session';
import mongoose from 'mongoose'
import cors from 'cors'
import UserController from './users/users-controller.js'; 
import MediaController from './media/media-controller.js'
import ViewController from './views/views-controller.js'
import SessionController from './session-controller.js';

const app = express()
app.set('trus proxy', 1)

// Middleware
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'super secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // true if on external server like heroku
}))


// API's
SessionController(app)
UserController(app)
MediaController(app)
ViewController(app)


// Database (make private)
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb+srv://gubiisepic:veerisepic1@lgnd.q3cgx5a.mongodb.net/?retryWrites=true&w=majority', options)


app.listen(4000)