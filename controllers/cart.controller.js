import Cart from '../models/cart.model.js';
import Product from '../models/product.model.js';

const fetchAllProductItemsFromCart = async (cart) => {
    // Fetch productItems from cart using map and Promise.all
    const productItems = await Promise.all(
        cart.map(async (item) => {
            return await Product.findById(item.productId);
        })
    );
    return productItems;
};

const getAllItemsInCart = async (req, res, next) => {
    try {
        const { user_id } = req.params;

        if (req.user._id != user_id) {
            const error = new Error("Sorry, but you can't access someone else's cart");
            error.statusCode = 401;
            throw error;
        }

        // Fetch items in cart
        const cartItems = await Cart.find({ owner: user_id });

        // Fetch the corresponding product details
        const productsInCart = await fetchAllProductItemsFromCart(cartItems);

        res.status(200).json({
            success: true,
            message: 'Fetched all items in cart',
            data: {
                cart: productsInCart
            }
        });
    } catch (error) {
        next(error);
    }
};

const addItemToCart = async (req, res, next) => {
    try {
        if (req.user._id != req.body.owner) {
            const error = new Error("Sorry, but you can't add to someone else's cart");
            error.statusCode = 401;
            throw error;
        }
        const newCartItem = await Cart.create([{ ...req.body }]);

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
    // Implementation pending
};

const deleteItemFromCart = async (req, res) => {
    // Implementation pending
};

export { deleteItemFromCart, updateItemInCart, addItemToCart, getAllItemsInCart };
