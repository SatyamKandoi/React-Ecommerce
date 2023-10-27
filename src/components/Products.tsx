import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard"; // Import your ProductCard component

function Products() {
	interface Product {
		id: number;
		title: string;
		price: number;
		description: string;
		category: string;
		image: string;
		rating: {
			rate: number;
			count: number;
		};
	}
	const [products, setProducts] = useState<Product[]>([]);
	useEffect(() => {
		// Make an API request to fetch products
		axios
			.get("http://localhost:3000/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
			});
	}, []);

	return (
		<div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(4, 1fr)", // Creates 4 equal columns
					gap: "20px", // Adjust the gap as needed
					// Additional styling for grid container (e.g., centering, width, etc.)
					width: "80%",
					margin: "0 auto", // Center the grid horizontally
				}}>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default Products;
