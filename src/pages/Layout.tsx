import Header from "../components/Header";
interface INameProps {
	children: React.ReactNode;
}

const Layout: React.FC<INameProps> = ({ children }) => {
	return (
		<>
			<div>
				<Header />
			</div>
			<main>{children}</main>
		</>
	);
};

export default Layout;
