"use client";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Header from "@/layout/header";
import HeroSection from "@/components/sections/hero-section";
import PricingSection from "@/components/sections/pricing-section";
import BenefitsSection from "@/components/sections/benefits-section";
import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/layout/footer";
import { seoConfig } from "@/lib/utils";

export default function HomePage() {
	return (
		<>
			<NextSeo
				title="Lắp Internet Viettel Đà Nẵng - Tốc Độ Cao, Giá Rẻ, Lắp Trong 2H"
				description="Lắp đặt internet cáp quang Viettel tại Đà Nẵng nhanh chóng trong 2 giờ. Tặng modem WiFi 6, camera giám sát, box điều khiển giọng nói. Giá rẻ nhất thị trường."
				canonical="https://viettel-danang.vercel.app"
				openGraph={{
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
					site_name: "Viettel Đà Nẵng",
				}}
				twitter={{
					cardType: "summary_large_image",
				}}
				additionalMetaTags={[
					{
						name: "keywords",
						content: seoConfig.keywords,
					},
					{
						name: "author",
						content: "Viettel Đà Nẵng",
					},
					{
						name: "robots",
						content: "index, follow",
					},
					{
						name: "googlebot",
						content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
					},
					{
						name: "geo.region",
						content: "VN-DN",
					},
					{
						name: "geo.placename",
						content: "Đà Nẵng",
					},
					{
						name: "geo.position",
						content: "16.0471659;108.1716864",
					},
					{
						name: "ICBM",
						content: "16.0471659, 108.1716864",
					},
				]}
			/>

			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
				<main>
					<HeroSection />
					<PricingSection />
					<BenefitsSection />
					<ServicesSection />
					<ContactSection />
				</main>
			</motion.div>
		</>
	);
}
