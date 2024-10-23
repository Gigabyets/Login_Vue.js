# Frontend - Vue.js Web Application

This is the frontend of a web application built using Vue.js. It provides the user interface for registration, login, and a home page. The frontend communicates with the backend API built using Actix Web and stores user data in MongoDB.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Vue CLI](https://cli.vuejs.org/) (Optional but recommended)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/yourproject.git
    cd yourproject/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure the backend URL (if needed):
    - Open the `src/config.js` file (or equivalent configuration file) and set the backend API URL. For example:
    ```javascript
    export const API_BASE_URL = "http://localhost:8080";
    ```

## Project Structure

The project structure follows a standard Vue.js layout:

```bash
frontend/
├── public/                   # Static public files
├── src/
│   ├── assets/               # Assets such as images, icons, etc.
│   ├── components/           # Reusable Vue components
│   ├── views/                # Pages (RegisterPage, LoginPage, HomePage)
│   ├── App.vue               # Main Vue app component
│   ├── main.js               # Entry point of the application
│   └── router.js             # Vue Router for navigation between pages
├── package.json              # Node.js dependencies and scripts
└── README.md                 # Project documentation
