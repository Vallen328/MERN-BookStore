const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./conn/conn");
const User = require("./routes/user.router");
const Books = require("./routes/book.router");
const Favourite = require("./routes/favourite.router");
const Cart = require("./routes/cart.router");
const Order = require("./routes/order.router");
app.use(cors());
app.use(express.json());
//Routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

//Creating Port
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at port ${process.env.PORT}`);
});