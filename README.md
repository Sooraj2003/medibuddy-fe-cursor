
# MediBuddy Assignment Frontend

This repository contains the frontend for the MediBuddy assignment, built with **Vite** and **React**. The application uses modern libraries for state management, API handling, styling, and pre-designed UI components.

---

## 🛠️ Technologies Used

- **React**: For building the user interface.
- **Vite**: A fast development build tool for modern web projects.
- **Redux**: For state management.
- **Axios**: For handling HTTP requests.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **DaisyUI**: A Tailwind CSS plugin for pre-designed UI components.

---

## 📂 Folder Structure

```
medibuddy-assignment-fe/
├── public/            # Static assets
├── src/               # Application source code
│   ├── components/    # Reusable React components
│   ├── utils/         # Redux slices and utility functions
│   ├── App.jsx        # Root component
│   ├── main.jsx       # Application entry point
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js     # Vite configuration
```

---

## 🚀 Getting Started

Follow the steps below to set up and run the application locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/medibuddy-assignment-fe.git
cd medibuddy-assignment-fe
```

### 2. Install Dependencies

Make sure you have **Node.js** installed on your machine. Then run:

```bash
npm install
```

### 3. Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

---

## 📦 Libraries and Tools

### 1. **Redux**
- Used for global state management.
- Centralized store helps manage the application state efficiently.
- Learn more: [Redux Documentation](https://redux.js.org/)

### 2. **Axios**
- Simplifies making HTTP requests to APIs.
- Learn more: [Axios Documentation](https://axios-http.com/)

### 3. **Tailwind CSS**
- Utility-first CSS framework for responsive and clean UI development.
- Learn more: [Tailwind CSS Documentation](https://tailwindcss.com/)

### 4. **DaisyUI**
- Tailwind CSS-based plugin for pre-designed UI components.
- Provides components like buttons, cards, modals, and more.
- Learn more: [DaisyUI Documentation](https://daisyui.com/)

---

## 🌟 Features

- **Responsive UI**: Built with Tailwind CSS and DaisyUI for a fully responsive design.
- **State Management**: Redux provides efficient state handling across the app.
- **API Integration**: Axios simplifies data fetching from APIs.

---

## 🔧 Configuration

### Tailwind CSS
Tailwind CSS is pre-configured using the `tailwind.config.js` file. You can customize your design tokens and utility classes as needed.

Example `tailwind.config.js`:
```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
```

### DaisyUI
DaisyUI is integrated with Tailwind CSS to provide pre-designed components. You can customize themes in the `daisyui` section of `tailwind.config.js`.

---

## 📜 Scripts

The following scripts are available in the `package.json` file:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs the linter to check for code issues.
