# Coffee House

A responsive, modular multi-page website built with Vanilla JS, Webpack, and SASS, featuring dynamic UI rendering from JSON data.

## 🔗 Live Demo
[View Live Project](https://gary217.github.io/coffee-house/)

---

## 🛠️ Tech Stack & Architecture

* **HTML5 & Vanilla JavaScript** — Semantic markup and modular script logic based on a **Feature-Based** architecture.
* **SASS (SCSS)** — Structured styling using the **7-1 Pattern** (abstracts, base, components, layout, pages).
* **Webpack 5** — Custom build setup handling module bundling, local development server, SASS compilation, CSS extraction, and HTML generation.
* **Asset Optimization** — Integrated `image-minimizer-webpack-plugin` using `mozjpeg`, `optipng`, and `pngquant` to compress images on production builds.
* **Responsive Layout** — Adaptive scaling for Desktop (1440px), Tablet (768px), and Mobile (380px) viewports with zero horizontal scroll.

---

## 🚀 Key Functionality

### 1. Navigation & Layout
* **Multi-page setup:** Separate configurations for the Home and Menu pages.
* **Burger Menu:** Smooth navigation drawer triggering on viewports $\le$ 768px.

### 2. Home Page
* **Custom Carousel:** Pure JavaScript slider with manual controls.
* **Video Background:** High-quality video assets rendered natively in promotional blocks.

### 3. Menu Page & Dynamic UI
* **Category Filtering:** Tab switching (Coffee, Tea, Desserts) without reloading the page.
* **"Load More" Pagination:** Displays 4 items by default and appends remaining cards dynamically on click.
* **Dynamic Modals:** Product blocks generated programmatically using a local dataset; clicking cards triggers popups populated via a JSON file.

---

## ⚙️ Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Gary217/coffee-house.git
   ```
2. Navigate to the project folder:
   ```bash
   cd .\coffee-house\
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server (Webpack Dev Server):
   ```bash
   npm start
   ```
5. Build the project for production:
   ```bash
   npm run build
   ```
6. Deploy directly to GitHub Pages:
   ```bash
   npm run deploy
   ```