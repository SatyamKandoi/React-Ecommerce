import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";

export default function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
		</Layout>
	);
}
