const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors")
const adminRouter = require("./routers/admin.route")
const managerRouter = require("./routers/manager.route")
const productRouter = require("./routers/product.route")
const connectDb= require("./utils/dbConnect")


const app = express();
dotenv.config();

// Database Connection
connectDb()

// Middlewares
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json())



// Routes
app.use('/admin',adminRouter)
app.use('/manager',managerRouter)
app.use('/product',productRouter)



const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port 3000`);
})