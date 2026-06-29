import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import { getProducts } from "../components/products";

function ProductsPage({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <ProductGrid
      products={products}
      onAddToCart={onAddToCart}
    />
  );
}

export default ProductsPage;