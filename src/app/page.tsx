import { seoConfig } from "@/lib/utils";
import { Metadata } from "next";
import HomePageClient from "./_components/home-page-client";

export const metadata: Metadata = {
	title: "Lắp Internet Viettel Đà Nẵng - Tốc Độ Cao, Giá Rẻ, Lắp Trong 2H",
	description:
		"Lắp đặt internet cáp quang Viettel tại Đà Nẵng nhanh chóng trong 2 giờ. Tặng modem WiFi 6, camera giám sát, box điều khiển giọng nói. Giá rẻ nhất thị trường.",
	alternates: {
		canonical: "https://viettel-danang.vercel.app",
	},
	openGraph: {
		url: "https://viettel-danang.vercel.app",
		title: "Lắp Internet Viettel Đà Nẵng - Tốc Độ Cao, Giá Rẻ",
		description:
			"Lắp đặt internet cáp quang Viettel tại Đà Nẵng nhanh chóng trong 2 giờ. Tặng modem WiFi 6, camera giám sát.",
		images: [
			{
				url: seoConfig.ogImage,
				width: 1200,
				height: 630,
				alt: "Lắp Internet Viettel Đà Nẵng",
			},
		],
		siteName: "Viettel Đà Nẵng",
	},
	twitter: {
		card: "summary_large_image",
	},
	keywords: seoConfig.keywords,
	authors: [{ name: "Viettel Đà Nẵng" }],
	robots: "index, follow",
};

export default function HomePage() {
	return (
		<>
			<HomePageClient />
		</>
	);
}
