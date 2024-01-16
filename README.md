# E-Commerce 🛒🛍️💳
> An app build with React and PostgreSQL

This application showcases a responsive, fully-functional food E-commerce website built using React, Tailwind CSS, PostgreSQL, Express.js and Node.js.

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
//

**Product Detail**
//

**Cart and Checkout Page**
//

**Login/Sign Up Page**
//

### Project Overview
- **Backend (Node.js & Express):** Handles data retrieval from PostgreSQL and serves API endpoints.
- **Frontend (React):** Provides a dynamic and responsive user interface styled with Tailwind CSS for a smooth browsing experience.
- **Database (PosgreSQL)**: Stores product information, user data, and orders details.
- **Containerization (Docker):** The application can be run in Docker containers for consistency across different environments.

### Project Structure
- **src/components:**  React components for different sections of the application.
- **src/pages:** Separate pages for routing and navigation.
- **src/services**: Backend services and API calls.
- **public**: Static assets like images.

## Dependencies

- [React Router](https://www.npmjs.com/package/react-router)
- [Redux Toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [Express](https://www.npmjs.com/package/express)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [node-postgres](https://node-postgres.com/)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [dotend](https://www.npmjs.com/package/dotenv)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [docker-compose](https://www.npmjs.com/package/docker-compose)


## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed
- Docker installed (if you prefer to run the application in a container)
  
### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Camila-Genco/ExpenseTracker.git your-project-name
   
2. Navigate to the project directory:

   ```bash
   cd your-project-name

3. Install dependencies:

   ```bash
   npm install

4. Start the application:

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
