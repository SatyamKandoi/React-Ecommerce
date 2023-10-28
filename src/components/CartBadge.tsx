import { Badge, Avatar } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function CartBadge() {
	const navigate = useNavigate();
	return (
		<Badge content="2" color="primary">
			<Avatar
				radius="md"
				size="sm"
				src="https://th.bing.com/th/id/OIP.gzT6X4N7bAnEiU6nCXiYgAHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
				onClick={() => navigate("/cart")}
			/>
		</Badge>
	);
}
