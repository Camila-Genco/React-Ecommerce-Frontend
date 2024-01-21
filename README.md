# E-Commerce Frontend 🛒🛍️💳
> An app build with React

This repository contains the frontend of a fullstack E-commerce application built using React, Tailwind CSS, PostgreSQL, Express.js, and Node.js. The complete project follows a decoupled architecture and includes both the frontend and backend components, creating a responsive and fully-functional food E-commerce website.

For the backend code and documentation, please refer to the [E-Commerce Backend Repository](https://github.com/Camila-Genco/store.git). The backend is responsible for handling business logic, data processing, and storage.

### Features
- **Product Showcase:** Browse a variety of products loaded from a PostgreSQL database.
- **Category and Price Filtering:** Choose to view products within a specific category or price range for a tailored shopping experience.
- **Product Details:** Click on any product to access comprehensive details, including pricing, reviews, and ratings.
- **Shopping Cart:** Easily select items and add them to your shopping cart for a streamlined checkout process.
- **User Authentication:** Login with your email and password. Secure registration is provided through BCrypt password-hashing function.
- **Responsive Design:** Enjoy a fluid and visually appealing experience across various devices and screen sizes.

## Live Demonstration
Here are screenshots that show the E-commerce demo application in use.

**Home Page**
![e-commerce-home (1)](https://github.com/Camila-Genco/e-commerce/assets/98172802/9d701cb8-e411-4346-a98a-8390a763fcb0)
![e-commerce-menu](https://github.com/Camila-Genco/e-commerce/assets/98172802/d2d1c416-b70a-4dd9-b67a-2a7cb5e0b38d)

**Product Detail**
![ecommerce-product-detail](https://github.com/Camila-Genco/e-commerce/assets/98172802/e5a9de84-f43f-4998-b0e7-18a45c9d1c85)

**Cart and Checkout Page**
![e-commerce-cart](https://github.com/Camila-Genco/e-commerce/assets/98172802/50df954e-2213-46a1-9941-e9c6e4609c49)

**Login/Sign Up Page**
![e-commerce-login](https://github.com/Camila-Genco/e-commerce/assets/98172802/fa4a9485-896a-49ed-a728-10f7b9f86272)
![e-commerce-sign](https://github.com/Camila-Genco/e-commerce/assets/98172802/531a6be5-6379-45e2-8b00-2d3a775c2451)


### Project Overview
- **Backend (Node.js & Express):** Handles data retrieval from PostgreSQL and serves API endpoints.
- **Frontend (React):** Provides a dynamic and responsive user interface styled with Tailwind CSS for a smooth browsing experience.
- **Database (PosgreSQL)**: Stores product information, user data, and orders details.
- **Containerization (Docker):** The application can be run in Docker containers for consistency across different environments.

### Project Structure
- **src/components:**  React components for different sections of the application.
- **src/pages:** Separate pages for routing and navigation.
- **public**: Static assets like images.

### Dependencies

- [React Router](https://www.npmjs.com/package/react-router)
- [Redux Toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)

## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed
- Docker installed (if you prefer to run the application in a container)
  
### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Camila-Genco/e-commerce.git your-project-name
   
2. Navigate to the project directory:

   ```bash
   cd your-project-name

3. Install dependencies:

   ```bash
   npm install

4. Configure the connection to the backend (if applicable).

5. Start the application:

   ```bash
   npm start

The application will be available at https://localhost:3000
The page will reload when you make changes.
You may also see any lint errors in the console.

### Some other scripts

`npm test`

Launches the test runner in the interactive watch mode.

`npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

`npm run eject`

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

To learn React, check out the [React documentation](https://reactjs.org/).
