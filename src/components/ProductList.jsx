const ProductList = ({ category, products }) => {
  return (
    <div className="container mx-auto">
      <h1>{category && category}</h1>
      {products && (
        <div className="carousel space-x-8">
          {products.map((product, index) => {
            return (
              <div className="carousel-item">
                <ProductCard product={product} key={index} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
