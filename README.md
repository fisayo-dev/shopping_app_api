# 🛍️ Shopping App API  

A robust and scalable API for a shopping application, built using **Node.js** and **MongoDB**. This API provides essential functionalities for managing products, user authentication, orders, payments, carts and more.

## 🚀 Features  

- **User Authentication** (JWT-based login & signup)  
- **Product Management** (CRUD operations)  
- **Cart & Order Management**  
- **Payment Integration** (Stripe, Flutterwave, or preferred gateway)  
- **Wishlist & Favorites**  
- **Secure & Optimized API Endpoints**  

## 🏗️ Tech Stack  

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ORM)  
- **Authentication:** JSON Web Tokens (JWT)  
- **Payments:** Stripe / PayStack  
- **API Documentation:** Swagger / Postman  

## 📦 Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/fisayo-dev/shopping-app-api.git
   cd shopping-app-api
2. Clone the repository:  
   ```bash
   npm install
3. Set up environment variables: <br/> Create a .env file and add the following: 
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    STRIPE_SECRET=your_stripe_secret_key
4. Start Server
    - __Local__:
        ```bash
        npm start
    - __Development__:
        ```bash
        npm run dev #uses nodemom

## 📌 API Endpoints  

| Method | Endpoint              | Description                    |
|--------|----------------------|--------------------------------|
| POST   | `/api/v1/admin/sign-up`   | Register a new admin           |
| POST   | `/api/v1/admin/sign-in`    | Authenticate admin              |
| POST   | `/api/v1/auth/sign-up`   | Register a new user           |
| POST   | `/api/v1/auth/sign-in`    | Authenticate user              |
| GET   | `/api/v1/users/`    | Get all Users (admin only)              |
| GET   | `/api/v1/users/:id`    | Get  user details              |
| PUT   | `/api/v1/users/:id`    | Edit  user details              |
| DELETE   | `/api/v1/users/:id`    | Delete  user               |
| GET    | `/api/v1/products`      | Fetch all products            |
| POST   | `/api/v1/products`      | Add a new product (admin only)             |
| PUT    | `/api/v1/products/:id`  | Update a product (admin only)              |
| DELETE | `/api/v1/products/:id`  | Delete a product (admin only)              |
| GET    | `/api/v1/orders/my-orders`      | Fetch all orders            |
| POST   | `/api/v1/orders/make`      | Add a new order             |
| GET    | `/api/v1/carts`    | Get items in cart             |
| POST   | `/api/v1/carts`        | Create an item in cart               |
| DELETE   | `/api/v1/carts/clear`        | Clear all item in cart               |
| DELETE   | `/api/v1/carts/remove/:id`        | Delete specific item in cart               |

## 🔐 Authentication

<p>
This API uses JWT authentication. After logging in, users receive a token, which they must include in requests requiring authentication.
</p>
Example request with JWT token:
    ```http
    GET /api/v1/carts
    Authorization: Bearer your_jwt_token

## 💳 Payments
The API supports payment processing via Paystack or Flutterwave. Ensure you configure your API keys correctly in the .env file.

## 📝 Contributions
Contributions are welcome! Feel free to fork this repo, submit issues, or create pull requests.

## 📄 License
This project is licensed under the MIT License.
```sql
Copy and paste this into your `README.md` file. Let me know if you need any modifications! 🚀