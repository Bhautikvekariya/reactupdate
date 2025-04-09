
import React, { useState, useEffect } from 'react';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                if (isMounted) {
                    setProducts(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) return <p>Loading products...</p>;

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Products;
