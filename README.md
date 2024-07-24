
# Restaurant Management System

## Overview

This project is a Restaurant Management System designed to help restaurants efficiently manage their operations, including orders, inventory, reservations, and menu items. The system is built using Express.js and Node.js for the backend, with MongoDB as the database.


## Features

- **Order Processing:** Manage customer orders, update order status, and keep track of all orders.
- **Table Management:** Handle table reservations, assign tables to customers, and manage table availability.
- **Inventory Tracking:** Track inventory levels, manage stock, and get alerts for low inventory.
- **Menu Management:** Add, update, and delete menu items, including pricing and availability.
## Technologies Used

- Backend:

    - Node.js
    - Express.js
- Database :
    - MongoDB 

## Prerequisites

- **Node.js** and npm installed
- **MongoDB** installed and *running*
## Installation

### Step 1 : Clone the repository

```bash
  git clone https://github.com/fawez9/Restaurant_Management_System.git
  cd Restaurant_Management_System
```

### Step 2 :Install dependencies

```bash
  npm install
```

### Step 3 : Set up environment variables

- Create a **.env** file based on .env.example and configure it with your MongoDB connection string and Port needed to run the app.
```bash
MONGO_URL=your_mongodb_connection_string
PORT=your_preferred_port (default 3000)
```

### Step 4 : Run the application

```bash
  npm run dev
```

### Testing:

- You can test the API endpoints using tools like **Postman** or any other API testing tool of your choice.



    
## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/)
 License
## Contributing

Contributions are welcome. For major changes, please open an issue first to discuss what you would like to change.
