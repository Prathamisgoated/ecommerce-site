import ProductGrid from "../components/ProductGrid";
import products from "../components/products";

function ProductsPage({ onAddToCart }) {
  return (
    <ProductGrid
      products={products}
      onAddToCart={onAddToCart}
    />
  );
}

export default ProductsPage;