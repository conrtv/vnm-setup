# Example web app with a filterable get request shown in a table

This web app provides a simple interface to filter and fetch data from a MySQL database using React, Node, and Express.

## Project Structure:

- `client`: Contains the React frontend application built with Vite.
- `server`: Contains the Node.js and Express backend server.

## Setup:

### Prerequisites:

1. **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
2. **MySQL**: Make sure you have MySQL set up. Use [MySQL Workbench](https://www.mysql.com/products/workbench/) for an easy-to-use GUI.

### Backend Setup:

1. **Navigate to the server directory**:  
    cd server

2. **Install dependencies**:
    npm install

4. **Configure the database**:

- Using MySQL Workbench, create a database/schema named `mydatabase`.
- Inside `mydatabase`, create a table named `mytable` with columns: `id`, `column1`, `column2`.

4. **Setup environment variables**:

- Create a `.env` file in the `server` directory.
- Fill it with your MySQL database credentials:

  ```
  DB_HOST=localhost
  DB_USER=your_username
  DB_PASS=your_password
  DB_NAME=mydatabase
  ```

  Replace `your_username` and `your_password` with your actual MySQL credentials.

5. **Run the server**:
    node index.js

Your server should now be running at `http://localhost:5000`.

### Frontend Setup:

1. **Navigate to the frontend directory**:
    cd client

2. **Install dependencies**:
    npm install

3. **Run the development server**:
    npm run dev

Your frontend app should now be running at `http://localhost:3000`.

### Usage:

1. Navigate to `http://localhost:3000` in your browser.
2. Use the input fields to specify filter values.
3. Click on the "Fetch Data" button to retrieve and display data based on the filters.

---
