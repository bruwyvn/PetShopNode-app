import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loadingProduct, setLoadingProduct] = useState(false);
  // const [errorProduct, setErrorProduct] = useState(undefined);

  useEffect(() => {
    async function fetchProduct() {
      setLoadingProduct(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await fetch(`http://localhost:3000/produto/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const json = await response.json();
        setProduct(json);
        setLoadingProduct(false);
      } catch (error) {
        // setErrorProduct({ error })
        console.error({ error });
      }
    }

    fetchProduct();
  });

  return loadingProduct ? (
    <h1>Carregando...</h1>
  ) : (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default Details;
