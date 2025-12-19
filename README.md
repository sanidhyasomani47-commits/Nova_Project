# Nova - Portfolio & Management Platform

**Nova** is a modern, full-stack web application designed as a premium portfolio and content management platform. It features a high-performance public landing page to showcase projects and clients, and a secure admin dashboard for managing content.

![Nova Project](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80) 
*(Note: Replace with actual screenshot of your app)*

## 🚀 Features

-   **Dynamic Landing Page**: Showcases portfolio projects and client testimonials.
-   **Admin Dashboard**: Secure area to manage all content (Projects, Clients, Contacts, Subscribers).
-   **CMS Functionality**: Full CRUD support for managing your portfolio.
-   **Newsletter**: Subscription management.
-   **Responsive Design**: Built with a glassmorphism aesthetic, fully responsive across devices.

## 🛠️ Tech Stack

-   **Frontend**: React 19, Vite, React Router v7, Axios, Glassmorphism UI (Vanilla CSS).
-   **Backend**: Node.js, Express.js.
-   **Database**: PostgreSQL (Neon DB / Local).
-   **Authentication**: JWT & Bcrypt.

## 📋 Prerequisites

-   Node.js (v18 or higher)
-   PostgreSQL (Local installed or cloud instance like Neon)

## 📦 Installation & Setup

### 1. Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` folder and add your configuration:
    ```env
    PORT=5000
    DATABASE_URL=postgresql://user:password@localhost:5432/nova_db
    JWT_SECRET=your_jwt_secret_key
    CORS_ORIGIN=http://localhost:5173
    ```
4.  Initialize the database:
    -   Run the `schema.sql` script in your PostgreSQL database to create tables and seed initial data.
    -   Alternatively, create the database manually and tables as per `schema.sql`.
5.  Start the server:
    ```bash
    npm start
    ```

### 2. Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

## 🔐 Admin Access

To access the Admin Dashboard, navigate to `/admin/login`.

**Default Credentials:**
-   **Username**: `admin`
-   **Password**: `password123`

*(Note: You can change the password after logging in or via the database)*

## 📂 Project Structure

```
Nova/
├── backend/          # Node.js API Server
│   ├── config/       # DB Config
│   ├── controllers/  # Logic
│   ├── routes/       # API Routes
│   └── schema.sql    # Database Schema
│
└── frontend/         # React Application
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── context/
    └── index.css     # Global Styles
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
