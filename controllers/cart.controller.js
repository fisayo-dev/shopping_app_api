import Cart from '../models/cart.model.js';
import Product from '../models/product.model.js';

const fetchAllProductItemsFromCart = async (cart) => {
    // Fetch productItems from cart using map and Promise.all
    const productItems = await Promise.all(
        cart.map(async (item) => {
            const product = await Product.findById(item.productId);
            return product ? {...product.toObject(), amount: item.amount} : null;
        })
    );
    return productItems.filter(item => item !== null);
};

const getAllItemsInCart = async (req, res, next) => {
    try {
        const user_id = req.user._id

        // Fetch items in cart
        const cartItems = await Cart.find({ owner: user_id });

        // Fetch the corresponding product details
        const productsInCart = await fetchAllProductItemsFromCart(cartItems);

        res.status(200).json({
            success: true,
            message: 'Fetched all items in cart',
            data: {
                cart: productsInCart,
            }
        });
    } catch (error) {
        next(error);
    }
};

const addItemToCart = async (req, res, next) => {
    try {
        const newCartItem = await Cart.create([{ ...req.body, owner: req.user._id }]);

        res.status(201).json({
            success: true,
            message: 'New item just added to cart',
            cart: newCartItem
        });
    } catch (error) {
        next(error);
    }
};

const updateItemInCart = async (req, res) => {
    const { newQuantity } = req.body;
    const { id } = req.params;

    const newparams = { amount: newQuantity };

    const itemExistInCart = await Cart.findOne({ productId: id, owner: req.user._id });

    if(!itemExistInCart) {
        res.status(404).json({
            success: false,
            message: 'Item not found in cart'
        });
    }

    await itemExistInCart.updateOne(newparams);
    res.status(200).json({
        success: true,
        message: 'Item updated successfully'
    });
};

const deleteItemFromCart = async (req, res, next) => {
    try {
        // Get user id from req.user
        const userId = req.user._id;
        const { id } = req.params;
        const cartItem = await Cart.findOne({ productId: id, owner: userId });

        if (cartItem === null) {
            const error = new Error("Item not found in cart");
            error.statusCode = 404;
            throw error;
        }

        await cartItem.deleteOne();
        res.status(200).json({
            success: true,
            message: 'Item removed from cart'
        });
    } catch (error) {
        next(error);
    }
};


const deleteAllItemsFromCart = async (req, res, next) => { 
    try {
        const userId = req.user._id;
        await Cart.deleteMany({ owner: userId });
        res.status(200).json({
            success: true,
            message: 'All items removed from cart'
        });
    } catch (error) {
        next(error);
    }
}

export { deleteItemFromCart, updateItemInCart, addItemToCart, getAllItemsInCart, deleteAllItemsFromCart };
