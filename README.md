# Task 3 - E-commerce Product Page

A responsive E-commerce Product Page built using React. The project demonstrates product listing, shopping cart functionality, quantity management, dynamic price calculation, and global state management using React Context API.

## Project Overview

This project is a simple E-commerce application where users can browse products and add them to a shopping cart.

The application provides a clean and responsive interface with product cards and a shopping cart.

Users can:

- View available products
- Add products to the cart
- Add the same product multiple times
- Increase or decrease product quantity
- Remove products from the cart
- View the total number of cart items
- View the dynamically calculated total price

## Features

- Responsive E-commerce interface
- Product listing
- Product cards with images, categories, names, and prices
- Add to Cart functionality
- Shopping cart
- Cart item count
- Increase quantity
- Decrease quantity
- Remove from cart
- Dynamic total price
- Empty cart state
- Checkout button
- Global cart state using React Context API
- Responsive design for desktop, tablet, and mobile
- Reusable React components
- Clean component structure

## Technologies Used

- React
- JavaScript
- Vite
- CSS
- HTML
- React Context API

## Project Structure

```text
task-3-ecommerce/
│
├── src/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── Cart.jsx
│   │   └── Footer.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/seemalimran26/task-3-ecommerce.git
```

### 2. Navigate to the Project

```bash
cd task-3-ecommerce
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

## Production Build

To create a production-ready build:

```bash
npm run build
```

The project successfully builds using Vite.

## Author

**Seemal Imran**

- GitHub: [@seemalimran26](https://github.com/seemalimran26)
