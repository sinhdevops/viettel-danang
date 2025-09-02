"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { phoneNumber } from "@/lib/utils";
import {
	Home,
	Building2,
	Tv,
	Camera,
	Phone,
	Wifi,
	Shield,
	Clock,
	Headphones,
	Settings,
	ArrowRight,
	CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const ServicesSection = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const services = [
		{
			icon: Home,
			title: "Internet Gia Đình",
			description:
				"Gói cước Internet cáp quang tốc độ cao dành cho hộ gia đình, phù hợp cho nhu cầu giải trí, làm việc tại nhà.",
			features: [
				"Tốc độ từ 50 - 300 Mbps",
				"Modem WiFi 6 miễn phí",
				"Băng thông không giới hạn",
				"Hỗ trợ kỹ thuật 24/7",
			],
			price: "Từ 165.000đ/tháng",
			color: "from-blue-500 to-cyan-600",
			bgColor: "bg-blue-50",
		},
		{
			icon: Tv,
			title: "Combo Internet + TV",
			description:
				"Gói combo tiết kiệm với Internet tốc độ cao kèm 160+ kênh truyền hình trong và ngoài nước chất lượng HD.",
			features: [
				"Internet từ 100 - 300 Mbps",
				"160+ kênh truyền hình",
				"Smart TV Box hoặc đầu thu",
				"Ứng dụng xem TV trên điện thoại",
			],
			price: "Từ 320.000đ/tháng",
			color: "from-purple-500 to-pink-600",
			bgColor: "bg-purple-50",
			popular: true,
		},
		{
			icon: Building2,
			title: "Internet Doanh Nghiệp",
			description:
				"Giải pháp Internet chuyên nghiệp cho doanh nghiệp với đường truyền riêng biệt, IP tĩnh và SLA cao.",
			features: [
				"Tốc độ từ 50 Mbps - 2 Gbps",
				"IP tĩnh chuyên dụng",
				"SLA 99.9% uptime",
				"Hỗ trợ kỹ thuật ưu tiên",
			],
			price: "Từ 950.000đ/tháng",
			color: "from-orange-500 to-red-600",
			bgColor: "bg-orange-50",
		},
	];

	const additionalServices = [
		{
			icon: Camera,
			title: "Camera Giám Sát",
			description: "Tặng kèm 2 camera xoay 360° với tính năng đàm thoại 2 chiều",
		},
		{
			icon: Wifi,
			title: "Smart TV Box",
			description: "Biến TV thường thành Smart TV, xem YouTube, hát Karaoke",
		},
		{
			icon: Shield,
			title: "Bảo Mật Internet",
			description: "Tường lửa tích hợp bảo vệ khỏi các mối đe dọa mạng",
		},
		{
			icon: Headphones,
			title: "Hỗ Trợ 24/7",
			description: "Đội ngũ kỹ thuật sẵn sàng hỗ trợ mọi lúc mọi nơi",
		},
	];

	const installationProcess = [
		{
			step: "01",
			title: "Đăng ký & Tư vấn",
			description: "Gọi hotline hoặc đăng ký online. Nhân viên tư vấn gói cước phù hợp.",
			icon: Phone,
		},
		{
			step: "02",
			title: "Khảo sát & Lắp đặt",
			description: "Kỹ thuật viên đến khảo sát và tiến hành lắp đặt trong 2 giờ.",
			icon: Settings,
		},
		{
			step: "03",
			title: "Kiểm tra & Bàn giao",
			description: "Kiểm tra chất lượng, hướng dẫn sử dụng và bàn giao cho khách hàng.",
			icon: CheckCircle,
		},
	];

	return (
		<section id="services" ref={ref} className="section-padding bg-white">
			<div className="container-custom">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="mb-16 text-center"
				>
					<Badge variant="outline" className="border-viettel-200 text-viettel-600 mb-4 px-4 py-2">
						Dịch vụ của chúng tôi
					</Badge>
					<h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
						Dịch vụ <span className="text-gradient">Internet Viettel</span> Đà Nẵng
					</h2>
					<p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
						Cung cấp đa dạng các gói dịch vụ Internet và truyền hình phù hợp với mọi nhu cầu từ cá nhân, gia
						đình đến doanh nghiệp
					</p>
				</motion.div>

				{/* Main Services */}
				<div className="mb-20 grid gap-8 lg:grid-cols-3">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: index * 0.2 }}
							className="group relative"
						>
							{service.popular && (
								<div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 transform">
									<Badge className="from-viettel-500 bg-gradient-to-r to-orange-600 px-4 py-1 text-white">
										Phổ biến nhất
									</Badge>
								</div>
							)}

							<Card
								className={`card-hover h-full border-2 ${
									service.popular ? "border-viettel-500 shadow-xl" : "border-gray-200"
								} overflow-hidden`}
							>
								<CardHeader className="pb-4 text-center">
									<div
										className={`h-20 w-20 rounded-3xl bg-gradient-to-br ${service.color} mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
									>
										<service.icon className="h-10 w-10 text-white" />
									</div>
									<CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
								</CardHeader>

								<CardContent className="space-y-6">
									<p className="text-center leading-relaxed text-gray-600">{service.description}</p>

									<div className={`${service.bgColor} rounded-xl p-4`}>
										<ul className="space-y-3">
											{service.features.map((feature, featureIndex) => (
												<li key={featureIndex} className="flex items-center space-x-3">
													<CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
													<span className="text-sm text-gray-700">{feature}</span>
												</li>
											))}
										</ul>
									</div>

									<div className="text-center">
										<div className="text-gradient mb-4 text-2xl font-bold">{service.price}</div>
										<Button
											variant={service.popular ? "viettel" : "outline"}
											size="lg"
											asChild
											className={`w-full ${
												service.popular
													? "pulse-glow"
													: "border-viettel-200 text-viettel-600 hover:bg-viettel-50"
											}`}
										>
											<Link href={`tel:${phoneNumber}`}>
												<Phone className="mr-2 h-4 w-4" />
												Đăng ký ngay
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Additional Services */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.8 }}
					className="mb-20"
				>
					<h3 className="mb-12 text-center text-3xl font-bold text-gray-900">
						Dịch vụ <span className="text-gradient">bổ sung</span>
					</h3>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{additionalServices.map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 1 + index * 0.1 }}
								className="group text-center"
							>
								<div className="from-viettel-500 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br to-orange-600 transition-transform duration-300 group-hover:scale-110">
									<service.icon className="h-8 w-8 text-white" />
								</div>
								<h4 className="mb-2 text-lg font-bold text-gray-900">{service.title}</h4>
								<p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Installation Process */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 1.2 }}
					className="rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 p-8 md:p-12"
				>
					<div className="mb-12 text-center">
						<h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
							Quy trình <span className="text-gradient">lắp đặt</span>
						</h3>
						<p className="text-lg text-gray-600">Chỉ 3 bước đơn giản để có Internet tốc độ cao tại nhà</p>
					</div>

					<div className="grid gap-8 md:grid-cols-3">
						{installationProcess.map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 1.4 + index * 0.2 }}
								className="relative text-center"
							>
								{/* Step Number */}
								<div className="from-viettel-500 relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br to-orange-600">
									<span className="text-xl font-bold text-white">{step.step}</span>
								</div>

								{/* Connector Line */}
								{index < installationProcess.length - 1 && (
									<div className="from-viettel-300 absolute top-8 left-1/2 -z-10 hidden h-0.5 w-full translate-x-8 transform bg-gradient-to-r to-orange-300 md:block"></div>
								)}

								{/* Icon */}
								<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg">
									<step.icon className="text-viettel-600 h-6 w-6" />
								</div>

								<h4 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h4>
								<p className="leading-relaxed text-gray-600">{step.description}</p>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 2 }}
						className="mt-12 text-center"
					>
						<Button variant="viettel" size="xl" asChild className="pulse-glow">
							<Link href={`tel:${phoneNumber}`}>
								<Clock className="mr-2 h-5 w-5" />
								Đăng ký lắp đặt trong 2H
								<ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ServicesSection;
