import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(`Fetching product with Id: ${id}`);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status:${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched Product:", data);
                setProduct(data);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setError(err.message); 
            });
    }, [id]);

    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Loading....</p>;

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} width="200" />
        </div>
    );
}

export default Product;
