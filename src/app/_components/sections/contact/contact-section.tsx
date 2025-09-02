"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { phoneNumber, companyAddress } from "@/lib/utils";
import { Phone, MapPin, Clock, MessageCircle, CheckCircle, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ContactForm from "./contact-form";

const ContactSection = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const contactInfo = [
		{
			icon: Phone,
			title: "Hotline 24/7",
			value: phoneNumber,
			description: "Gọi ngay để được tư vấn miễn phí",
			link: `tel:${phoneNumber}`,
			color: "from-green-500 to-emerald-600",
		},
		{
			icon: MessageSquare,
			title: "Zalo/Viber",
			value: phoneNumber,
			description: "Chat trực tiếp qua Zalo hoặc Viber",
			link: `https://zalo.me/${phoneNumber}`,
			color: "from-blue-500 to-cyan-600",
		},
		{
			icon: MapPin,
			title: "Địa chỉ",
			value: companyAddress,
			description: "Đến trực tiếp văn phòng để được hỗ trợ",
			link: "#",
			color: "from-purple-500 to-violet-600",
		},
		{
			icon: Clock,
			title: "Giờ làm việc",
			value: "24/7",
			description: "Phục vụ khách hàng mọi lúc mọi nơi",
			link: "#",
			color: "from-orange-500 to-red-600",
		},
	];

	return (
		<section id="contact" ref={ref} className="section-padding bg-gradient-to-b from-gray-50 to-white">
			<div className="container-custom">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="mb-16 text-center"
				>
					<Badge variant="outline" className="border-viettel-200 text-viettel-600 mb-4 px-4 py-2">
						Liên hệ với chúng tôi
					</Badge>
					<h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
						Đăng ký <span className="text-gradient">Internet Viettel</span> ngay hôm nay
					</h2>
					<p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
						Liên hệ với chúng tôi để được tư vấn miễn phí và nhận ưu đãi đặc biệt. Cam kết lắp đặt nhanh
						chóng trong 2 giờ!
					</p>
				</motion.div>

				<div className="grid gap-12 px-16 lg:grid-cols-2">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.3 }}
						className="space-y-8"
					>
						<div>
							<h3 className="mb-6 text-2xl font-bold text-gray-900">Thông tin liên hệ</h3>
							<div className="grid gap-6 sm:grid-cols-2">
								{contactInfo.map((info, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 30 }}
										animate={inView ? { opacity: 1, y: 0 } : {}}
										transition={{ delay: 0.5 + index * 0.1 }}
									>
										<Card className="card-hover h-full border-0 shadow-lg">
											<CardContent className="p-6 text-center">
												<div
													className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${info.color} mx-auto mb-4 flex items-center justify-center`}
												>
													<info.icon className="h-8 w-8 text-white" />
												</div>
												<h4 className="mb-2 font-bold text-gray-900">{info.title}</h4>
												<p className="text-viettel-600 mb-2 text-lg font-semibold">
													{info.value}
												</p>
												<p className="mb-4 text-sm text-gray-600">{info.description}</p>
												{info.link !== "#" && (
													<Button
														variant="outline"
														size="sm"
														asChild
														className="border-viettel-200 text-viettel-600 hover:bg-viettel-50"
													>
														<Link href={info.link}>Liên hệ ngay</Link>
													</Button>
												)}
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>
						</div>

						{/* Quick Action Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.8 }}
							className="from-viettel-500 rounded-3xl bg-gradient-to-r to-orange-600 p-8 text-white"
						>
							<h4 className="mb-4 text-center text-2xl font-bold">🎉 Ưu đãi đặc biệt trong tháng này!</h4>
							<div className="mb-6 space-y-3">
								<div className="flex items-center space-x-3">
									<CheckCircle className="h-5 w-5 flex-shrink-0 text-green-300" />
									<span>Tặng 1 tháng cước khi đóng trước 12 tháng</span>
								</div>
								<div className="flex items-center space-x-3">
									<CheckCircle className="h-5 w-5 flex-shrink-0 text-green-300" />
									<span>Miễn phí toàn bộ thiết bị WiFi 6 + Camera</span>
								</div>
								<div className="flex items-center space-x-3">
									<CheckCircle className="h-5 w-5 flex-shrink-0 text-green-300" />
									<span>Lắp đặt nhanh chóng trong 2 giờ</span>
								</div>
							</div>
							<div className="flex flex-col gap-4 sm:flex-row">
								<Button variant="secondary" size="lg" asChild className="flex-1">
									<Link href={`tel:${phoneNumber}`}>
										<Phone className="mr-2 h-4 w-4" />
										Gọi ngay
									</Link>
								</Button>
								<Button
									variant="outline"
									size="lg"
									asChild
									className="flex-1 border-white/20 text-white hover:bg-white/10"
								>
									<Link href={`https://zalo.me/${phoneNumber}`}>
										<MessageCircle className="mr-2 h-4 w-4" />
										Chat Zalo
									</Link>
								</Button>
							</div>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.5 }}
					>
						<Card className="border-0 shadow-xl">
							<CardHeader>
								<CardTitle className="text-center text-2xl font-bold text-gray-900">
									Đăng ký tư vấn miễn phí
								</CardTitle>
							</CardHeader>
							<CardContent className="p-6">
								<ContactForm />
								{/* {!isSubmitted ? (
									
								) : (
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										className="py-8 text-center"
									>
										<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
											<CheckCircle className="h-10 w-10 text-white" />
										</div>
										<h3 className="mb-4 text-2xl font-bold text-gray-900">
											Cảm ơn bạn đã đăng ký!
										</h3>
										<p className="mb-6 text-gray-600">
											Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để tư vấn chi tiết về
											gói cước phù hợp.
										</p>
										<div className="flex flex-col justify-center gap-4 sm:flex-row">
											<Button variant="viettel" size="lg" asChild>
												<Link href={`tel:${phoneNumber}`}>
													<Phone className="mr-2 h-4 w-4" />
													Gọi ngay để được hỗ trợ nhanh hơn
												</Link>
											</Button>
										</div>
									</motion.div>
								)} */}
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Bottom CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 1 }}
					className="mt-20 text-center"
				>
					<div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-12">
						<h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
							Sẵn sàng trải nghiệm Internet tốc độ cao?
						</h3>
						<p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
							Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi. Hãy là người tiếp
							theo!
						</p>

						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Button variant="viettel" size="xl" asChild className="pulse-glow">
								<Link href={`tel:${phoneNumber}`}>
									<Phone className="mr-2 h-5 w-5" />
									Hotline: {phoneNumber}
								</Link>
							</Button>
							<Button variant="outline" size="xl" asChild>
								<Link href="#pricing">
									<Calendar className="mr-2 h-5 w-5" />
									Xem bảng giá chi tiết
								</Link>
							</Button>
						</div>

						<div className="mt-8 border-t border-gray-200 pt-8">
							<div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
								<div className="flex items-center">
									<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
									Lắp đặt miễn phí
								</div>
								<div className="flex items-center">
									<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
									Bảo hành trọn đời
								</div>
								<div className="flex items-center">
									<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
									Hỗ trợ 24/7
								</div>
								<div className="flex items-center">
									<CheckCircle className="mr-2 h-4 w-4 text-green-500" />
									Cam kết giá rẻ nhất
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection;
