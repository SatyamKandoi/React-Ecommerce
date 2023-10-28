import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function Checkout() {
	return (
		<Card className="py-4 h-[500px]">
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				<p className="text-tiny uppercase font-bold">E-commerce Cart</p>
				<br></br>
				<h4 className="font-bold text-large">Checkout For the Orders</h4>
			</CardHeader>
			<CardBody className="overflow-visible py-2">
				<Image
					alt="Card background"
					className="object-cover rounded-xl"
					src="/images/hero-card-complete.jpeg"
					width={270}
				/>
				<Button color="primary" variant="bordered" className="mt-[280px]">
					Prooced To Payment
				</Button>
			</CardBody>
		</Card>
	);
}
