"use client";

import { motion } from "framer-motion";
import HeroSection from "@/app/_components/sections/hero-section";
import PricingSection from "@/app/_components/sections/pricing-section";
import BenefitsSection from "@/app/_components/sections/benefits-section";
import ServicesSection from "@/app/_components/sections/services-section";
import ContactSection from "@/app/_components/sections/contact/contact-section";

function HomePageClient() {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
			<main>
				<HeroSection />
				<PricingSection />
				<BenefitsSection />
				<ServicesSection />
				<ContactSection />
			</main>
		</motion.div>
	);
}

export default HomePageClient;
