const ProductList = ({ category, products }) => {
  return (
    <div className="container mx-auto">
      <h1>{category && category}</h1>
      {products &&
        products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
    </div>
  );
};

export default ProductList;
