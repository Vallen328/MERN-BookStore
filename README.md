# Bookstore Management System

![image](https://github.com/user-attachments/assets/f272d56b-d7df-4e1e-8623-4c76cc6b0c2d)
![image](https://github.com/user-attachments/assets/7b77da1a-2983-4b54-8592-59af76a702bf)


A fully responsive full-stack web application for managing an online bookstore with user and admin functionalities.

## Features

### User Side:
- **Home Page**: Attractive landing page with navigation bar (Home, All Books, Sign Up/Login)
- **Book Catalog**: Scrollable list of available books
- **User Authentication**: Sign Up/Login functionality
- **Book Details**:
  - View book details and author information
  - Add to Favorites
  - Add to Cart
- **Shopping Cart**:
  - Automatic total calculation
  - Order placement
- **User Profile**:
  - Favorites list
  - Order history
  - Settings (Update address)

### Admin Side:
- **Book Management**:
  - Add new books
  - Edit existing book details
  - Delete books
- **Order Management**:
  - View all orders
  - Update order status (Delivered, Cancelled, etc.)

## Technologies Used
- Frontend: React.js, HTML5, CSS3
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Payment Integration: (Add if any)

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account or local MongoDB installation
- Git

### Setup

1. **Clone the repository**
git clone https://github.com/yourusername/MERN-BookStore.git
cd bookstore-management

2. **Backend Setup**

cd backend
npm install

3. **Frontend Setup**

cd ../frontend
npm install

4. **Environment Variables**
Create .env file in backend directory:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Running the Application


5. **Backend** (from backend directory):

nodemon app.js
Frontend (from frontend directory):
npm run dev

Adding Images
Store images in frontend/public/images directory

**Contributing**
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request
