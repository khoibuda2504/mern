require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
mongoose.set('strictQuery', false)

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learning.w1xfyv9.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected')
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)


connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})