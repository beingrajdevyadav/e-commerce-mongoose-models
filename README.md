# 🛒 E-Commerce Mongoose Models Practice

A complete set of MongoDB Mongoose schema models for building a full-featured E-Commerce application. This repository is perfect for learning and practicing how to structure a scalable backend using Mongoose with Node.js and Express.

---

## 📦 Models Included

| Model Name    | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| User          | User details with role-based access                                         |
| Product       | Product catalog including stock, price, images, and ratings                |
| Review        | Product reviews by users with ratings                                       |
| Order         | Order records with items, shipping, and payment info                        |
| Cart          | Cart model for storing user-selected products                              |
| Category      | Product categories with optional images                                     |
| Wishlist      | Wishlist functionality to save products                                     |
| Coupon        | Discount coupon codes with validity and discount percent                    |
| Payment       | Optional payment transaction record model                                   |
| ActivityLog   | Admin activity logs for security and monitoring                             |

---

## 📁 Project Structure

- 📦models
- ┣ 📜userModel.js
- ┣ 📜productModel.js
- ┣ 📜reviewModel.js
- ┣ 📜orderModel.js
- ┣ 📜cartModel.js
- ┣ 📜categoryModel.js
- ┣ 📜wishlistModel.js
- ┣ 📜couponModel.js
- ┣ 📜paymentModel.js
- ┗ 📜activityLogModel.js


## 📚 Usage
You can import and use these models in any Node.js Express backend. They are helpful for:

- Practicing model relationships
- Building a full backend
- Learning advanced schema design
- Implementing business logic like reviews, payments, and shipping


## 💡 Ideas for Extension

- Add inventory tracking and stock update triggers
- Implement user password hashing and JWT auth
- Connect to Stripe or Razorpay for real payments
- Add a review approval system for admins

--- 