const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(
        url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then((data) => {
        console.log('mongodb connect successfully')
    })
}

module.exports = connectDB