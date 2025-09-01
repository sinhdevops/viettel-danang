"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Headphones, Settings, Trophy, Clock, Wifi, TrendingUp, CheckCircle2, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

const BenefitsSection = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const benefits = [
		{
			icon: Zap,
			title: "Tốc độ truyền tải cao và ổn định",
			description:
				"Hệ thống cáp quang hiện đại với công nghệ tiên tiến, mang lại tốc độ truyền tải cực nhanh và ổn định. Không lo giật lag hay mất kết nối.",
			features: ["Tốc độ upload/download cân bằng", "Độ trễ thấp < 5ms", "Uptime 99.9%"],
			color: "from-blue-500 to-cyan-600",
			bgColor: "bg-blue-50",
			textColor: "text-blue-600",
		},
		{
			icon: Settings,
			title: "Đa dạng gói cước và linh hoạt nâng cấp",
			description:
				"Nhiều gói cước khác nhau phù hợp với mọi nhu cầu. Dễ dàng nâng cấp gói cước chỉ với một cuộc gọi điện thoại.",
			features: ["Gói cá nhân từ 50-300 Mbps", "Gói combo Internet + TV", "Gói doanh nghiệp đến 2Gbps"],
			color: "from-green-500 to-emerald-600",
			bgColor: "bg-green-50",
			textColor: "text-green-600",
		},
		{
			icon: Headphones,
			title: "Dịch vụ khách hàng tận tâm",
			description:
				"Đội ngũ nhân viên tư vấn và kỹ thuật chuyên nghiệp, luôn sẵn sàng giải quyết mọi vấn đề của khách hàng nhanh chóng và hiệu quả.",
			features: ["Hỗ trợ 24/7 toàn năm", "Kỹ thuật viên chuyên nghiệp", "Thời gian phản hồi < 2h"],
			color: "from-purple-500 to-violet-600",
			bgColor: "bg-purple-50",
			textColor: "text-purple-600",
		},
	];

	const stats = [
		{
			icon: Trophy,
			number: "100K+",
			label: "Khách hàng tin tưởng",
			description: "Đã phục vụ hơn 100.000 khách hàng tại Đà Nẵng",
		},
		{
			icon: Clock,
			number: "2 Giờ",
			label: "Lắp đặt nhanh chóng",
			description: "Cam kết lắp đặt hoàn thành trong 2 giờ",
		},
		{
			icon: Wifi,
			number: "99.9%",
			label: "Độ ổn định mạng",
			description: "Đảm bảo chất lượng đường truyền ổn định",
		},
		{
			icon: TrendingUp,
			number: "5 Năm",
			label: "Kinh nghiệm phục vụ",
			description: "Dẫn đầu thị trường Internet tại Đà Nẵng",
		},
	];

	const whyChooseUs = [
		"Thủ tục đơn giản, chỉ cần chụp CCCD",
		"Miễn phí tất cả thiết bị kèm theo",
		"Đội ngũ kỹ thuật viên chuyên nghiệp",
		"Cam kết giá rẻ nhất thị trường",
		"Hỗ trợ lắp đặt ngoài giờ hành chính",
		"Bảo hành thiết bị trọn đời",
	];

	return (
		<section id="benefits" ref={ref} className="section-padding bg-gradient-to-b from-gray-50 to-white">
			<div className="container-custom">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="mb-16 text-center"
				>
					<Badge variant="outline" className="border-viettel-200 text-viettel-600 mb-4 px-4 py-2">
						Tại sao chọn Viettel?
					</Badge>
					<h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
						Những lợi ích khi sử dụng <span className="text-gradient">Internet Viettel</span>
					</h2>
					<p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
						Viettel Đà Nẵng cam kết mang đến cho khách hàng trải nghiệm Internet tốt nhất với dịch vụ chuyên
						nghiệp và chất lượng hàng đầu
					</p>
				</motion.div>

				{/* Main Benefits */}
				<div className="mb-20 grid gap-8 lg:grid-cols-3">
					{benefits.map((benefit, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: index * 0.2 }}
							className="group"
						>
							<Card className="card-hover h-full overflow-hidden border-0 shadow-lg">
								<CardContent className="p-8">
									<div
										className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${benefit.color} mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
									>
										<benefit.icon className="h-8 w-8 text-white" />
									</div>

									<h3 className="mb-4 text-2xl font-bold text-gray-900">{benefit.title}</h3>

									<p className="mb-6 leading-relaxed text-gray-600">{benefit.description}</p>

									<div className={`${benefit.bgColor} rounded-xl p-4`}>
										<div className="space-y-2">
											{benefit.features.map((feature, featureIndex) => (
												<div key={featureIndex} className="flex items-center space-x-2">
													<CheckCircle2
														className={`h-4 w-4 ${benefit.textColor} flex-shrink-0`}
													/>
													<span className={`text-sm font-medium ${benefit.textColor}`}>
														{feature}
													</span>
												</div>
											))}
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Stats Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.8 }}
					className="from-viettel-500 mb-20 rounded-3xl bg-gradient-to-r to-orange-600 p-8 md:p-12"
				>
					<div className="grid gap-8 text-center text-white md:grid-cols-4">
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={inView ? { opacity: 1, scale: 1 } : {}}
								transition={{ delay: 1 + index * 0.1 }}
								className="space-y-4"
							>
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
									<stat.icon className="h-8 w-8 text-white" />
								</div>
								<div className="text-4xl font-bold md:text-5xl">{stat.number}</div>
								<div className="text-xl font-semibold text-white/90">{stat.label}</div>
								<div className="text-sm leading-relaxed text-white/80">{stat.description}</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Why Choose Us */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 1.2 }}
					className="grid items-center gap-12 p-8 pt-0 lg:grid-cols-2"
				>
					<div>
						<Badge variant="outline" className="border-viettel-200 text-viettel-600 mb-4 px-4 py-2">
							Ưu điểm vượt trội
						</Badge>
						<h3 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
							Tại sao hàng nghìn khách hàng
							<span className="text-gradient"> tin tưởng chọn Viettel?</span>
						</h3>
						<p className="mb-8 text-lg leading-relaxed text-gray-600">
							Chúng tôi không chỉ cung cấp Internet mà còn mang đến trải nghiệm dịch vụ hoàn hảo từ khâu
							tư vấn, lắp đặt đến hỗ trợ sau bán hàng.
						</p>

						<div className="grid gap-4 sm:grid-cols-2">
							{whyChooseUs.map((reason, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={inView ? { opacity: 1, x: 0 } : {}}
									transition={{ delay: 1.4 + index * 0.1 }}
									className="flex items-center space-x-3"
								>
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600">
										<CheckCircle2 className="h-4 w-4 text-white" />
									</div>
									<span className="font-medium text-gray-700">{reason}</span>
								</motion.div>
							))}
						</div>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={inView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 1.6 }}
						className="relative"
					>
						<div className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-orange-50 p-8">
							{/* Decorative Elements */}
							<div className="from-viettel-400 absolute top-4 right-4 h-16 w-16 rounded-full bg-gradient-to-br to-orange-500 opacity-20"></div>
							<div className="absolute bottom-8 left-8 h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 opacity-30"></div>

							<div className="relative z-10 text-center">
								<div className="from-viettel-500 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br to-orange-600">
									<Star className="h-10 w-10 text-white" />
								</div>

								<h4 className="mb-4 text-2xl font-bold text-gray-900">Đánh giá từ khách hàng</h4>

								<div className="mb-4 flex justify-center">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="h-6 w-6 fill-current text-yellow-400" />
									))}
								</div>

								<blockquote className="mb-6 text-lg text-gray-700 italic">
									{`"Dịch vụ tuyệt vời! Lắp đặt nhanh chóng, đúng hẹn. Internet ổn
                  định, tốc độ như cam kết. Nhân viên hỗ trợ rất nhiệt tình và
                  chuyên nghiệp."`}
								</blockquote>

								<div className="text-sm text-gray-600">
									<div className="font-semibold">Anh Minh Tuấn</div>
									<div>Khách hàng sử dụng gói Home 200</div>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default BenefitsSection;
