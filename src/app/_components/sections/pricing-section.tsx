"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	personalPlans,
	comboPlans,
	businessSmallPlans,
	businessLargePlans,
	promotions,
	type PricingPlan,
} from "@/assets/data/pricing";
import { formatPrice, formatSpeed, phoneNumber, cn } from "@/lib/utils";
import { Check, Phone, Wifi, Users, Building, Crown, Zap, Gift, Star } from "lucide-react";
import Link from "next/link";

const PricingSection = () => {
	const [activeTab, setActiveTab] = useState<"personal" | "combo" | "business">("personal");

	const tabs = [
		{
			id: "personal" as const,
			label: "Cá nhân & Gia đình",
			icon: Users,
			description: "Phù hợp cho hộ gia đình, nhu cầu cơ bản",
		},
		{
			id: "combo" as const,
			label: "Combo Internet + TV",
			icon: Wifi,
			description: "Internet + 160 kênh truyền hình",
		},
		{
			id: "business" as const,
			label: "Doanh nghiệp",
			icon: Building,
			description: "Giải pháp chuyên nghiệp cho doanh nghiệp",
		},
	];

	const getPlansByTab = (tab: string): PricingPlan[] => {
		switch (tab) {
			case "personal":
				return personalPlans;
			case "combo":
				return comboPlans;
			case "business":
				return [...businessSmallPlans, ...businessLargePlans];
			default:
				return personalPlans;
		}
	};

	const PricingCard = ({ plan, index }: { plan: PricingPlan; index: number }) => (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1 }}
			viewport={{ once: true }}
			className="relative h-full"
		>
			<Card
				className={cn(
					"card-hover relative h-full border-2 transition-all duration-300",
					plan.popular
						? "border-viettel-500 shadow-viettel-100 scale-105 shadow-xl"
						: "hover:border-viettel-300 border-gray-200",
				)}
			>
				{plan.popular && (
					<div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
						<Badge className="from-viettel-500 bg-gradient-to-r to-orange-600 px-4 py-1 text-white">
							<Crown className="mr-1 h-4 w-4" />
							Phổ biến nhất
						</Badge>
					</div>
				)}

				<CardHeader className="pb-4 text-center">
					<CardTitle className="mb-2 text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
					<div className="space-y-2">
						<div className="text-gradient text-4xl font-bold">{formatPrice(plan.price)}</div>
						<div className="text-sm text-gray-500">/tháng</div>
						<div className="text-viettel-600 flex items-center justify-center space-x-2">
							<Zap className="h-4 w-4" />
							<span className="font-semibold">{formatSpeed(plan.speed)}</span>
						</div>
					</div>
				</CardHeader>

				<CardContent className="space-y-6">
					{/* Equipment Info */}
					{plan.equipment && (
						<div className="bg-viettel-50 rounded-lg p-3">
							<div className="text-viettel-700 flex items-center text-sm">
								<Gift className="mr-2 h-4 w-4" />
								<span className="font-medium">Tặng kèm: {plan.equipment}</span>
							</div>
						</div>
					)}

					{/* Features */}
					<ul className="space-y-3">
						{plan.features.map((feature, featureIndex) => (
							<li key={featureIndex} className="flex items-start space-x-3">
								<Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
								<span className="text-sm leading-relaxed text-gray-700">{feature}</span>
							</li>
						))}
					</ul>

					{/* Special Features */}
					{plan.tvChannels && (
						<div className="border-t pt-4">
							<div className="flex items-center text-sm text-blue-600">
								<Star className="mr-2 h-4 w-4" />
								<span>{plan.tvChannels}+ kênh truyền hình</span>
							</div>
						</div>
					)}

					{plan.ipStatic && (
						<div className="border-t pt-4">
							<div className="flex items-center text-sm text-purple-600">
								<Crown className="mr-2 h-4 w-4" />
								<span>IP tĩnh chuyên dụng</span>
							</div>
						</div>
					)}

					{/* CTA Button */}
					<Button
						variant={plan.popular ? "viettel" : "outline"}
						size="lg"
						asChild
						className={cn(
							"w-full",
							plan.popular ? "pulse-glow" : "border-viettel-200 text-viettel-600 hover:bg-viettel-50",
						)}
					>
						<Link href={`tel:${phoneNumber}`}>
							<Phone className="mr-2 h-4 w-4" />
							Đăng ký ngay
						</Link>
					</Button>
				</CardContent>
			</Card>
		</motion.div>
	);

	return (
		<section id="pricing" className="section-padding mt-16 bg-gradient-to-b from-white to-gray-50">
			<div className="container-custom">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16 text-center"
				>
					<Badge variant="outline" className="border-viettel-200 text-viettel-600 mb-4 px-4 py-2">
						Bảng giá chi tiết
					</Badge>
					<h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
						Gói cước <span className="text-gradient">Internet Viettel</span>
					</h2>
					<p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
						Lựa chọn gói cước phù hợp với nhu cầu của bạn. Tất cả gói đều có
						<span className="text-viettel-600 font-semibold"> tốc độ ổn định</span> và
						<span className="font-semibold text-orange-600"> hỗ trợ 24/7</span>
					</p>
				</motion.div>

				{/* Tabs */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12 flex flex-col justify-center md:flex-row"
				>
					<div className="inline-flex flex-col rounded-2xl border border-gray-200 bg-white p-2 shadow-lg md:flex-row">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={cn(
									"flex items-center space-x-3 rounded-xl px-6 py-4 text-left transition-all duration-300",
									activeTab === tab.id
										? "from-viettel-500 bg-gradient-to-r to-orange-600 text-white shadow-lg"
										: "hover:text-viettel-600 hover:bg-viettel-50 text-gray-600",
								)}
							>
								<tab.icon className="h-5 w-5 flex-shrink-0" />
								<div>
									<div className="font-semibold">{tab.label}</div>
									<div className="text-xs opacity-80">{tab.description}</div>
								</div>
							</button>
						))}
					</div>
				</motion.div>

				{/* Pricing Grid */}
				<div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{getPlansByTab(activeTab).map((plan, index) => (
						<PricingCard key={plan.id} plan={plan} index={index} />
					))}
				</div>

				{/* Promotions */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="from-viettel-500 rounded-3xl bg-gradient-to-r to-orange-600 p-8 text-white md:p-12"
				>
					<div className="mb-10 text-center">
						<h3 className="mb-4 text-3xl font-bold md:text-4xl">🎉 Chương trình khuyến mãi đặc biệt</h3>
						<p className="text-xl text-white/90">Nhiều ưu đãi hấp dẫn khi đăng ký gói cước Viettel</p>
					</div>

					<div className="grid gap-8 md:grid-cols-3">
						{Object.entries(promotions).map(([key, promo], index) => (
							<motion.div
								key={key}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
							>
								<h4 className="mb-4 text-center text-xl font-bold">{promo.title}</h4>
								<ul className="space-y-3">
									{promo.benefits.map((benefit, benefitIndex) => (
										<li key={benefitIndex} className="flex items-start space-x-3">
											<Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-300" />
											<span className="text-sm text-white/90">{benefit}</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>

					<div className="mt-10 text-center">
						<Button
							variant="secondary"
							size="xl"
							asChild
							className="text-viettel-600 bg-white font-semibold hover:bg-gray-100"
						>
							<Link href={`tel:${phoneNumber}`}>
								<Phone className="mr-2 h-5 w-5" />
								Gọi ngay để nhận ưu đãi
							</Link>
						</Button>
					</div>
				</motion.div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
						<h3 className="mb-4 text-2xl font-bold text-gray-900">Cần tư vấn thêm về gói cước?</h3>
						<p className="mb-6 text-gray-600">
							Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn chọn gói cước phù hợp nhất
						</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row">
							<Button variant="viettel" size="lg" asChild>
								<Link href={`tel:${phoneNumber}`}>
									<Phone className="mr-2 h-4 w-4" />
									Gọi tư vấn miễn phí
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="#contact">Đăng ký tư vấn</Link>
							</Button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default PricingSection;
