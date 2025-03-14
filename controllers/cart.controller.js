import Cart from '../models/cart.model.js'
import Product from '../models/product.model.js'

const getAllItemsInCart = async (req, res, next) => {
    const { userId } = req.params;

    if (req.user._id != userId) {
        const error = new Error("Soory, but you can't access somelse's cart")
        error.statusCode = 401
        throw error
    }

    // Fetch items in cart
    const cartItems = await Cart.find({ owner: userId })

    // Fetch productItems from cart
    let productItems = []
    cartItems.map(async (item) => {
        const product = await Product.findById(item.productId)
        productItems.push(product)
    })

    res.status(200).json({
        success: true,
        message: 'Fetched all items in cart',
        data: {
            ...cartItems,
            productInCart: productItems
        }
    })
}

const addItemToCart = async (req, res) => {

}

const updateItemInCart = async (req, res) => {

}

const deleteItemFromCart = async (req, res) => {

}


export { deleteItemFromCart, updateItemInCart, addItemToCart, getAllItemsInCart,  }
