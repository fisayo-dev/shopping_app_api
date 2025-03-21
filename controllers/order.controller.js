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
            const productInCart = await Cart.findOne({ owner: req.user._id, productId: id })
            return product ? {...product.toObject(), amount: (productInCart.amount * product.price)} : null;
        })
    );

    const totalPrice = productItems.length > 1 ? productItems.reduce((a, b) => a.amount + b.amount): productItems[0].amount
    
    // Populate order schema
    await Order.create({
        productsOrdered: productsIds,
        totalPrice,
        owner: req.user._id
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
    // Get orders

    const orders = await Order.find({ owner: req.user._id })
    if (!orders) {
        const error = new Error("Seems like you haven't ordered anything yet")
        error.statusCode = 404
        next(error)
    }

    // Get total order price
    const totalOrderPrice = orders.length > 1 ? orders.reduce((a, b) => a.totalPrice + b.totalPrice) : orders[0].totalPrice

    // Get products ordered and their quantity
    const orderProductIds = []
    orders.map((order) => {
        const ids = order.productsOrdered
        ids.map(prodId => orderProductIds.push(prodId))
    })
    
    const totalOrderProducts = await Promise.all(
        orderProductIds.map(async (prodId) => {
            const product = await Product.findById(prodId);
            const productInCart = await Cart.findOne({ productId: prodId });
            return product ? {...product.toObject(), totalPrice: productInCart.amount * product.price} : null;
        })
    );
    totalOrderProducts.filter(item => item !== null);
    
    res.status(200).json({
        success: true,
        message: 'Successfully got your orders',
        data: {
            totalOrderPrice,
            totalOrderQuantity: totalOrderProducts.length,
            orders: totalOrderProducts
        }
    })
}

export const getOrder = async (req, res, next) => {
    
}