import Footer from "./footer";
import Header from "./header";

function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default MainLayout;
