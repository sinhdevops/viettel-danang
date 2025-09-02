import FloatingContact from "@/components/floating-contact/floating-contact";
import Footer from "./footer";
import Header from "./header";

function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
			<FloatingContact />
		</>
	);
}

export default MainLayout;
