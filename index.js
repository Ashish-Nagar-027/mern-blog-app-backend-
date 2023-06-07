const express = require('express')
const app = express()
const cookieParserer = require('cookie-parser')

// import routes
const postRoutes = require('./routes/postRoutes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const verifyToken = require('./middlewares/authMiddleware')


// middleware
app.use(cookieParserer())


// Using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//using routes
app.use('/api/v1/posts', verifyToken , postRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/user', verifyToken , userRoutes)


app.get('/', (req, res) => {
    res.send("Blog app api")
})

module.exports = app