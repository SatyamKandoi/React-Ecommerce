import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

type Product = {
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
};

interface ProductCardProps {
	product: Product;
}

function ProductCard({ product }: ProductCardProps) {
	return (
		<Card style={{ height: "400px", maxWidth: "300px", marginTop: "100px" }}>
			<CardHeader
				className="pb-2 px-4"
				style={{ display: "flex", justifyContent: "space-between" }}>
				<p className="text-tiny uppercase font-bold" style={{ margin: "0" }}>
					{product.category}
				</p>
				<h4 className="font-bold text-large" style={{ margin: "0" }}>
					${product.price}
				</h4>
			</CardHeader>
			<CardBody
				className="overflow-visible py-2"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<Image
					alt="Card background"
					className="object-cover rounded-xl"
					src={product.image}
					width={270}
					style={{ objectFit: "contain", width: "300px", height: "200px" }}
				/>
			</CardBody>
			<small className="text-default-500 text-center">{product.title}</small>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "10px",
				}}>
				<Button color="primary" size="sm" style={{ margin: "10px" }}>
					View Product
				</Button>
				<Button color="primary" size="sm" style={{ margin: "10px" }}>
					Add to Cart
				</Button>
			</div>
		</Card>
	);
}

export default ProductCard;
