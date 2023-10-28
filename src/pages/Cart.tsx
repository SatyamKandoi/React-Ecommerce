import CartCard from "../components/CartCard";
import Checkout from "../components/Checkout";

export default function Cart() {
	return (
		<div className="flex">
			<div className="ml-[300px] mt-[60px]">
				<CartCard></CartCard>
				<CartCard></CartCard>
				<CartCard></CartCard>
			</div>
			<div className="ml-[200px] mt-[65px]">
				<Checkout />
			</div>
		</div>
	);
}
