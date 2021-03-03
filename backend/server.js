const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./routes/UserRouter')
const categoryRouter = require('./routes/CategoryRouter')
const productRouter = require("./routes/ProductRouter")
dotenv.config()
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
mongoose.connect(
    process.env.MONGODB_URL ||
      "mongodb+srv://admin:admin@medicom-cluster.wrxga.mongodb.net/medicom?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );
mongoose.connection.once("open", () => {
    console.log("connection successful");
  })
  .on("error", (error) => {
    console.error("Error => ", error);
  });
app.get('/', (req, res)=>{
    res.send("Hello")
})

app.use('/api/users', userRouter)
app.use('/api/category', categoryRouter)
app.use('/api/products', productRouter)

app.listen(5000, ()=>{
  console.log("Listneing to the port")
})