# 📝 CodeHelp Blogs - React + Context API Blog Website

A responsive and minimal blog web app built using **ReactJS**, styled with **Tailwind CSS**, and powered by the **Context API** for global state management. It dynamically fetches and displays blog posts with pagination support.

## 🚀 Features

- 📰 Fetches blog data dynamically via API
- 📄 Pagination with "Next" and "Previous" controls
- 🔄 Centralized state using React's Context API
- 💻 Responsive UI with Tailwind CSS
- 💡 Loading spinner while fetching data
- 🔍 Clean component-based architecture

## 📁 Project Structure

src/
├── components/
│ ├── Blogs.js # Renders list of blog posts
│ ├── Header.js # Static top header
│ ├── Pagination.js # Next & Previous page buttons
│ ├── Spinner.js # Loader shown while fetching
│
├── context/
│ └── App Context.js # Context API for global state
│
├── App.js # Main component
├── index.js # Root ReactDOM render
├── App.css # Custom styles
├── baseUrl.js # API endpoint base URL


## 🧠 Tech Stack

- **ReactJS** – UI rendering
- **Tailwind CSS** – Utility-first styling
- **Context API** – Global state management
- **JavaScript (ES6+)** – Logic and component interaction
- **Fetch API** – To fetch blog data from REST API

## 🔄 State Management (Context API)

The entire app's blog data, page state, and loading state are managed using the Context API.

### Context Methods:

- `fetchBlogPosts(page)` – Fetches posts for the current page.
- `handlePageChange(newPage)` – Handles pagination logic.
- Global state includes: `posts`, `loading`, `page`, `totalPages`.

## 🖼 Pagination Logic

```js
if (page > 1) show "Previous" button;
if (page < totalPages) show "Next" button;

Each page's blog data is fetched dynamically and updates the posts array.

🌀 Spinner
A minimal animated spinner is shown while data is being fetched using a loading boolean flag from context.

🌐 API Endpoint
The base URL for fetching blog posts is defined in:

// baseUrl.js
export const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

💡 Getting Started
1. Clone the repo
git clone https://github.com/Anmolvaish0708/blogs-context-app.git

2. Install dependencies
npm install

3. Run the app
npm start

🙌 Author
Anmol Pandey
🔗 LinkedIn | 💻 Passionate React Developer

📄 License
This project is open source and available under the MIT License.


---

Let me know if you'd like:
- A shorter version for a job application repo
- A Hindi + English explanation version
- Or if you'd like to embed GIFs/screenshots in it

I can also help you with a **LinkedIn post** based on this project.
