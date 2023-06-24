import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [image, setImage] = useState("vite.svg");

  useEffect(() => {
    if (product.image.mimetype && product.image.data) {
      const { mimetype, data } = product.image;
      setImage(`data:${mimetype};base64,${data}`);
    }
  }, [product.image]);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={product.name && product.name} />
        <div className="card-body">
          <h2 className="card-title">{product.name && product.name}</h2>
          <p>{product.description && product.description}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/product/${product.id && product.id}`}
              className="btn-primary btn"
            >
              Detalhes
            </Link>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ProductCard;
