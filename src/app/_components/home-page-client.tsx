"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/sections/hero-section";
import PricingSection from "@/components/sections/pricing-section";
import BenefitsSection from "@/components/sections/benefits-section";
import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";

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
