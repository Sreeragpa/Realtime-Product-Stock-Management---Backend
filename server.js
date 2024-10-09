const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors")
const adminRouter = require("./routers/admin.route")
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



const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port 3000`);
})