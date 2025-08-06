📰 CodeHelp Blog App v2

A dynamic and responsive blog application built with React JS, using modern features like Context API, React Router, and a fully functional dark/light mode toggle. This version enhances the user experience with a persistent header, fixed pagination, and clean component-based structure for scalability.


🚀 Features
✅ Core Features
📄 Multiple Blog Posts: Dynamically rendered from API with support for pagination.

🧭 Routing with React Router: Navigate between blog details, categories, and tag pages.

🔄 Pagination: Next and previous page buttons with dynamic page tracking.

💡 Dark Mode Toggle: Easily switch between light and dark themes using ThemeContext.

🧠 Global State with Context API: Manage blog data and pagination state without prop drilling.

💅 Tailwind CSS: Fully responsive and clean UI styling with utility-first classes.

🔄 Dynamic URL Search Params: Page changes reflect in the URL for better navigation and shareability.


🆕 What's New Compared to blog-context-app

Feature	                              Description
🌙 ThemeContext (Dark Mode)        	 Users can toggle between light and dark themes using a global context.
📌 Fixed Header & Pagination	     Header stays at the top, and pagination remains at the bottom for better navigation.
🎨 Tailwind-based UI Upgrade	     Improved layout and component structure using Tailwind's responsive utilities.
🔗 SEO-Friendly Routing	             URLs include slugs for tags and categories (e.g., /categories/web-dev).
🔁 Clean State Management	         Enhanced use of AppContext for managing loading state, posts, and page logic.
📤 Navigate Hook for Pagination	     Pagination updates the URL using useNavigate instead of directly fetching data.

📁 Folder Structure

src/
│
├── Components/
│   ├── BlogDetails.jsx
│   ├── Blogs.jsx
│   ├── Header.jsx
│   ├── Pagination.jsx
│   └── Spinner.jsx
│
├── context/
│   ├── AppContext.jsx
│   └── ThemeContext.jsx
│
├── Pages/
│   └── Home.jsx
│
├── App.js
├── index.js
└── baseUrl.js

🛠️ Tech Stack

React JS

React Router DOM

Context API

Tailwind CSS

JavaScript (ES6+)

🧑‍💻 Getting Started
1. Clone the repo
git clone https://github.com/Anmolvaish0708/your-repo-name.git
cd your-repo-name

2. Install dependencies
npm install

3. Run the app
npm start

✍️ Author
Made with ❤️ by Anmol Pandey

📜 License
This project is licensed under the MIT License.

