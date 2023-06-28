import ProductCard from "./ProductCard";

const ProductList = ({ category, products }) => {
  return (
    <div className="container mx-auto">
      <h1>{category && category}</h1>
      {products && (
        <div className="carousel space-x-8">
          {products.map((product, index) => {
            return (
              <div className="carousel-item" key={index}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
