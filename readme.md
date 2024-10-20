# Product Stock Management Backend

This is the backend of a **Product Stock Management** application, built using **Node.js**, **Express**, and **Socket.io**. It handles **user authentication** and **role-based access control** using **JWT** (JSON Web Token) for different user roles: **Admin**, **Manager**, and **Store Manager**. The application also features real-time stock updates using **Socket.io**, ensuring both managers get notified instantly when new products are added or updated.

## Features

- **JWT-based Authentication**: Secure authentication with role-based access control.
- **Role-based Authorization**:
  - **Admin**: Can manage all users and products.
  - **Manager**: Can view and manage products.
  - **Store Manager**: Can view product stock updates.
- **Product Management**:
  - Add new products.
  - Edit existing products.
  - Real-time updates on both manager sides when stock changes.
- **Real-time Updates**: Real-time product stock updates using **Socket.io**.

## Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web framework for Node.js.
- **Socket.io**: Real-time bidirectional communication.
- **JWT**: For authentication and authorization.
- **MongoDB (Optional)**: For product storage (can use any database).

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
