import Cart from '../models/cart.model.js';
import Product from '../models/product.model.js';
import Order from '../models/order.model.js';

export const makeOrders = async (req, res, next) => {
    // Check if user has anything in cart to order
    const cartItemsToOrdered = await Cart.find({ owner: req.user._id })
    if (!cartItemsToOrdered) { 
        const error = new Error("Sorry but there is nothing in your cart to order")
        error.statusCode = 404
        next(error)
    }
    
    // Get all the id(s) of products ordered by the user
    const productsIds = cartItemsToOrdered.map((item) => item.productId)

    // Get order total price
    const productItems = await Promise.all(
        productsIds.map(async (id) => {
            const product = await Product.findById(id);
            const productInCart = await Cart.find({ owner: req.user._id, productId: id })
            return product ? {...product.toObject(), amount: productInCart.amount} : null;
        })
    );

    const totalPrice = productItems.reduce((a, b) => a.amount + b.amount)
    
    
    // Populate order schema
    await Order.create({
        productsOrdered: productsIds,
        totalPrice
    })

    res.status(201).json({
        success: true,
        message: 'Your order was successfull, Chill. Your product will soon be delivered to you! ',
        data: {
            productsOrdered: productsIds.length, 
            orderPrice: totalPrice 
        }
    })


}

export const getOrders = async (req, res, next) => {
    
}

export const getOrder = async (req, res, next) => {
    
}