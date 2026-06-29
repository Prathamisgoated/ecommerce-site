import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Features from "../components/Features";
import CategoryShowcase from "../components/CategoryShowcase";
import ProductGrid from "../components/ProductGrid";
import { getProducts } from "../components/products";

function Home({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <Hero />
      <Marquee />
      <Features />
      <CategoryShowcase />

      <ProductGrid
        products={products}
        onAddToCart={onAddToCart}
      />
    </>
  );
}

export default Home;