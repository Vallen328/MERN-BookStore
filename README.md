# Bookstore Management System

![Project Screenshot](/screenshots/homepage.png) <!-- Add your screenshot path -->

A full-stack web application for managing an online bookstore with user and admin functionalities.

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
git clone https://github.com/yourusername/bookstore-management.git
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

Use in React components:

<img src="/images/your-image.jpg" alt="Description" />

Project Structure:

bookstore-management/
├── backend/
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Authentication middleware
│   └── app.js          # Main server file
├── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Application pages
│   │   └── App.js      # Main React component
├── .gitignore
└── README.md


**Contributing**
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request
