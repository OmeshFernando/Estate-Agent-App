
# TrustHome - Estate Agent App

**🚀 Live Demo:** [View Deployed Application](https://omeshfernando-estate-agent-app.netlify.app/)

A modern, high-performance property search application built with **React** and **Vite**. **TrustHome** provides a seamless user experience for browsing real estate listings, viewing detailed property data, and managing a personalized favorites list.

## Key Features

* **Advanced Search & Filter:** Dynamic filtering system to find properties by type, price range, bedroom count, date added, and postcode area.
* **Property Gallery:** Interactive image gallery on property pages with thumbnail navigation and full-screen views.
* **Tabbed Information:** Organized property details using a tabbed interface for Descriptions, Floor Plans, and Maps.
* **Favourites Management:** A dedicated sidebar to save properties of interest, persisted via **Local Storage**.
* **Fully Responsive:** Custom-engineered CSS for a flawless experience across mobile, tablet, and desktop screens.

## Tech Stack

* **Frontend:** React (Vite)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Date Handling:** `react-datepicker`
* **Styling:** Pure CSS (Flexbox & Grid) with a focus on custom properties (variables) for theme consistency.
* **Utilities:** Custom search and filter logic located in `src/utils`.

## Project Structure

```text
estate-agent-app/
├── public/              # Static assets (JSON data, property images)
├── src/
│   ├── assets/          # SVG icons and logos
│   ├── components/      # UI components (SearchForm, PropertyCard, Favourites, etc.)
│   ├── data/            # Local data storage/JSON files
│   ├── styles/          # Global and component-specific CSS files
│   ├── utils/           # Helper functions for search filtering and date formatting
│   ├── App.jsx          # Main application logic and routing
│   ├── main.jsx         # Entry point
│   └── setupTests.js    # Testing configuration
├── index.html           # HTML template
├── vite.config.js       # Vite build setup
└── package.json         # Scripts and dependencies

```

## Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/OmeshFernando/Estate-Agent-App.git
cd estate-agent-app

```


2. **Install dependencies**
```bash
npm install

```


3. **Start the development server**
```bash
npm run dev

```


Access the app at `http://localhost:5173`.
4. **Build for production**
```bash
npm run build

```


