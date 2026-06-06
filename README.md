# ShopWave — React E-Commerce Website

A professional, fully-responsive e-commerce website built with React.

## Project Structure

```
src/
├── components/          ← All 7 reusable components live here
│   ├── Navbar.jsx       ← Fixed navigation with cart icon, search, mobile menu
│   ├── Navbar.css
│   ├── Hero.jsx         ← Full-screen landing section with animated blobs
│   ├── Hero.css
│   ├── Features.jsx     ← Trust/feature banner (shipping, returns, etc.)
│   ├── Features.css
│   ├── ProductGrid.jsx  ← Product listing with category filters & sort
│   ├── ProductGrid.css
│   ├── ProductCard.jsx  ← Individual product card with wishlist & add-to-cart
│   ├── ProductCard.css
│   ├── Cart.jsx         ← Slide-out cart drawer with quantity controls
│   ├── Cart.css
│   ├── Footer.jsx       ← Newsletter signup + site links
│   ├── Footer.css
│   ├── Toast.jsx        ← Animated "Added to cart" notification
│   └── Toast.css
├── data/
│   └── products.js      ← Product data array (8 products)
├── App.js               ← Main app logic (cart state management)
├── App.css              ← Global styles
└── index.js             ← React entry point
```

## Components (7 total)
1. **Navbar** — Sticky header, search bar, wishlist, cart with badge
2. **Hero** — Landing hero with animated background, stats, floating cards
3. **Features** — Trust signals strip (shipping, returns, security)
4. **ProductGrid** — Filter by category, search, sort, responsive grid
5. **ProductCard** — Product image, rating stars, badges, wishlist, add-to-cart
6. **Cart** — Slide-in drawer, quantity update, order summary, free shipping indicator
7. **Footer** — Newsletter, social links, nav columns, payment badges
8. **Toast** — Pop-up notification on add-to-cart

## Setup & Run

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Then open http://localhost:3000 in your browser.

## Features
- Filter products by category
- Search products by name
- Sort by price, rating, or popularity
- Add to cart / remove items
- Adjust item quantities
- Free shipping indicator (orders above ₹999)
- Wishlist toggle per product
- Mobile responsive design
- Smooth animations & transitions
