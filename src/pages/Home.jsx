import { useEffect, useState } from "react";

// Components
import ProductList from "../components/ProductList";

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
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await fetch("http://localhost:3000/produto", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
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
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await fetch("http://localhost:3000/category", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
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
