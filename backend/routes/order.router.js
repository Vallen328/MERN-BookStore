const router = require("express").Router();
const Book = require("../models/book");
const Order = require("../models/order");
const User = require("../models/user");
const { authenticateToken } = require("./userAuth");

//Place Order

router.post("/place-order", authenticateToken, async(req, res) => {
    try{
        const { id } = req.headers;
        const { order } = req.body;
        for(const orderData of order){
            const newOrder = new Order({user: id, book: orderData._id});

            //Save user in user model
            const orderDataFromDb = await newOrder.save();
            
            await User.findByIdAndUpdate(id, {
                $push: { orders: orderDataFromDb._id},
            });

            //clearing Cart
            await User.findByIdAndUpdate(id, {
                $pull: { cart: orderData._id},
            });
        }
        return res.json({
            status: "Success",
            message: "Order placed successfully",
        });
    }catch(error){
        console.error("Error placing order:", error);
        return res.status(500).json({ message: "An error occured"});
    }
});

//Get order history of particular user

router.get("/get-order-history", authenticateToken, async(req, res) => {
    try{
        const { id } = req.headers;
        const userData = await User.findById(id).populate({
            path: "orders",
            populate: { path: "book"},
        });

        const ordersData = userData.orders.reverse() || [];
        return res.json({
            status: "Success",
            data: ordersData,
        });
    }catch(error){
        console.error("Error fetching order history:", error);
        return res.status(500).json({ message: "An error occured"});
    }
});

//get all orders -- Admin

router.get("/get-all-orders", authenticateToken, async(req, res) => {
    try{
        const userData = await Order.find()
            .populate({
                path: "book",
        })
        .populate({
            path: "user",
        })
        .sort({ createdAt: -1 });
        return res.json({
            status: "Success", 
            data: userData,
        });
    }catch(error){
        console.error("Error fetching all orders:", error); 
        return res.status(500).json({ message: "An error occured"});
    }
});

//update order --admin

router.put("/update-status/:id", authenticateToken, async(req, res) => {
    try {
        const { id } = req.params; // Order ID
        await Order.findByIdAndUpdate(id, { status: req.body.status});
        return res.json({
            status: "Success",
            message: "Status Updated Successfully",
        });
    } catch (error) {
        console.error("Error updating order status:", error);
        return res.status(500).json({ message: "An error occurred" });
    }
});



module.exports = router;
