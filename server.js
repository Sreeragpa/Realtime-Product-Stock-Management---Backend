const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors")
const adminRouter = require("./routers/admin.route")
const managerRouter = require("./routers/manager.route")
const productRouter = require("./routers/product.route")
const storemanagerRouter = require("./routers/storemanager.route")
const connectDb= require("./utils/dbConnect")
const http = require("http")
const socketio = require("./configs/socketio")


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
app.use('/storemanager',storemanagerRouter)
app.use('/product',productRouter)



const PORT = process.env.PORT || 3000;

// app.listen(PORT,()=>{
//     console.log(`Server running on port ${PORT}`);
// })

const server = http.createServer(app);

// Initializing Socketio Connection
const io = socketio.initializeSockeio(server)

server.listen(PORT,()=>{
     console.log(`Server running on port ${PORT}`);
 })

// module.exports = server