# React Routing

A small React application built to practice and demonstrate client-side routing with **React Router DOM**. It features a multi-page layout with smooth navigation between Home, Product, Service, and About views — no page reloads required.

## Features

- **Client-Side Routing** — Powered by `react-router-dom` using `BrowserRouter`, `Routes`, and `Route`.
- **Active Link Highlighting** — Navigation bar uses `NavLink` to visually highlight the currently active page.
- **Multiple Pages** — Home, Product, Service, and About, each rendered as a separate route/component.
- **Modern Tooling** — Built with Vite for fast development and hot module reloading.
- **Styled with Tailwind CSS** — Utility-first styling for a clean, responsive UI.

## Tech Stack

- React
- React Router DOM
- Vite
- Tailwind CSS

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/trisha-pandey/react-routing.git
   cd react-routing
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in your terminal (typically `http://localhost:5173`).

## Project Structure

```
react-routing/
├── src/
│   ├── App.jsx              # Root component rendering Nav + routes
│   ├── main.jsx              # Entry point, wraps App in BrowserRouter
│   ├── components/
│   │   ├── Nav.jsx           # Navigation bar with active link styling
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Product.jsx
│   │   └── Service.jsx
│   └── routes/
│       └── Mainroutes.jsx    # Route definitions
└── package.json
```

## Author

**Trisha Pandey**
[GitHub](https://github.com/trisha-pandey)
