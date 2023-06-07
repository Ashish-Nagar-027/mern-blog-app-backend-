const connectDB = require('./db/connect')
const app = require('./index')
require('dotenv').config()


const start =  async ()  => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, () => {
            console.log('server is listening at port 3000')
        })
    } catch (error) {
        console.log("DB Connection failed")
        console.log(error)
        process.exit(1)
    }
}

start()