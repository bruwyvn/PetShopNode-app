import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  // const [errorProducts, setErrorProducts] = useState(undefined);
  // const [errorCategories, setErrorCategories] = useState(undefined);

  useEffect(() => {
    async function fetchProducts() {
      setLoadingProducts(true);
      try {
        const response = await fetch(url + "/produto");
        const json = await response.json();
        setProducts(json);
        setLoadingProducts(false);
      } catch (error) {
        // setErrorProducts({ error });
        console.error({ error });
      }
    }

    fetchProducts();
  });

  useEffect(() => {
    async function fetchCategories() {
      setLoadingCategories(true);
      try {
        const response = await fetch(url + "/category");
        const json = await response.json();
        setCategories(json);
        setLoadingCategories(false);
      } catch (error) {
        // setErrorCategories({ error });
        console.error({ error });
      }
    }

    fetchCategories();
  });

  return (
    <div className="min-h-screen bg-base-200">
      {!loadingProducts &&
        !loadingCategories &&
        categories.map((category, index) => {
          return (
            <ProductList
              category={category}
              key={index}
              products={products.filter((product) => {
                product.category === category;
              })}
            />
          );
        })}
    </div>
  );
};

export default Home;
