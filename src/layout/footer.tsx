"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wifi, Phone, MapPin, Clock, Facebook, Youtube, Twitter, ArrowUp, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { phoneNumber, companyName, companyAddress, socialLinks } from "@/lib/utils";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const footerLinks = {
		services: [
			{ name: "Internet gia đình", href: "#pricing-personal" },
			{ name: "Combo Internet + TV", href: "#pricing-combo" },
			{ name: "Internet doanh nghiệp", href: "#pricing-business" },
			{ name: "Hỗ trợ kỹ thuật", href: "#contact" },
		],
		company: [
			{ name: "Giới thiệu", href: "#about" },
			{ name: "Ưu điểm", href: "#benefits" },
			{ name: "Bảng giá", href: "#pricing" },
			{ name: "Liên hệ", href: "#contact" },
		],
		support: [
			{ name: "Hotline 24/7", href: `tel:${phoneNumber}` },
			{ name: "Chat Zalo", href: `https://zalo.me/${phoneNumber}` },
			{ name: "Hướng dẫn sử dụng", href: "#" },
			{ name: "Báo cáo sự cố", href: `tel:${phoneNumber}` },
		],
	};

	const features = [
		"Lắp đặt nhanh trong 2 giờ",
		"Miễn phí toàn bộ thiết bị",
		"Hỗ trợ kỹ thuật 24/7",
		"Cam kết giá rẻ nhất thị trường",
	];

	const socialIcons = [
		{
			icon: Facebook,
			href: socialLinks.facebook,
			color: "hover:text-blue-600",
		},
		{ icon: Youtube, href: socialLinks.youtube, color: "hover:text-red-600" },
		{ icon: Twitter, href: socialLinks.twitter, color: "hover:text-blue-400" },
	];

	return (
		<footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

			{/* Scroll to Top Button */}
			<Button
				onClick={scrollToTop}
				variant="viettel"
				size="lg"
				className="fixed right-8 bottom-8 z-50 h-14 w-14 rounded-full p-0 shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				<ArrowUp className="h-6 w-6" />
			</Button>

			<div className="relative z-10">
				<div className="border-b border-gray-700">
					<div className="container-custom py-12">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center"
						>
							<h3 className="mb-4 text-3xl font-bold md:text-4xl">
								Bạn đã sẵn sàng để có <span className="text-gradient">Internet tốc độ cao</span>?
							</h3>
							<p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
								Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận ưu đãi đặc biệt
							</p>
							<div className="flex flex-col justify-center gap-4 sm:flex-row">
								<Button variant="viettel" size="xl" asChild className="pulse-glow">
									<Link href={`tel:${phoneNumber}`}>
										<Phone className="mr-2 h-5 w-5" />
										Gọi ngay: {phoneNumber}
									</Link>
								</Button>
								<Button
									variant="outline"
									size="xl"
									asChild
									className="border-white/20 text-white hover:bg-white/10"
								>
									<Link href="#pricing">Xem bảng giá</Link>
								</Button>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Main Footer Content */}
				<div className="container-custom px-8 py-16">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{/* Company Info */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="lg:col-span-2"
						>
							<div className="mb-6 flex items-center space-x-3">
								<div className="from-viettel-500 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br to-orange-600">
									<Wifi className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-white">{companyName}</h3>
									<p className="text-sm text-gray-400">Internet Cáp Quang Tốc Độ Cao</p>
								</div>
							</div>

							<p className="mb-6 leading-relaxed text-gray-300">
								Chúng tôi là nhà cung cấp dịch vụ Internet hàng đầu tại Đà Nẵng với hơn 5 năm kinh
								nghiệm. Cam kết mang đến cho khách hàng những trải nghiệm Internet tốt nhất với giá cả
								cạnh tranh nhất.
							</p>

							<div className="mb-6 space-y-3">
								{features.map((feature, index) => (
									<div key={index} className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 flex-shrink-0 text-green-400" />
										<span className="text-gray-300">{feature}</span>
									</div>
								))}
							</div>

							{/* Contact Info */}
							<div className="space-y-4">
								<div className="flex items-center space-x-3">
									<Phone className="text-viettel-400 h-5 w-5 flex-shrink-0" />
									<Link
										href={`tel:${phoneNumber}`}
										className="text-gray-300 transition-colors hover:text-white"
									>
										{phoneNumber}
									</Link>
								</div>
								<div className="flex items-center space-x-3">
									<MapPin className="text-viettel-400 h-5 w-5 flex-shrink-0" />
									<span className="text-gray-300">{companyAddress}</span>
								</div>
								<div className="flex items-center space-x-3">
									<Clock className="text-viettel-400 h-5 w-5 flex-shrink-0" />
									<span className="text-gray-300">Phục vụ 24/7 - Tất cả các ngày trong tuần</span>
								</div>
							</div>
						</motion.div>

						{/* Services */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							<h4 className="mb-6 text-lg font-bold text-white">Dịch vụ</h4>
							<ul className="space-y-3">
								{footerLinks.services.map((link, index) => (
									<li key={index}>
										<Link
											href={link.href}
											className="hover:text-viettel-400 group flex items-center text-gray-300 transition-colors duration-200"
										>
											<span className="bg-viettel-500 mr-3 h-2 w-2 rounded-full opacity-0 transition-opacity group-hover:opacity-100"></span>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>

						{/* Support */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
						>
							<h4 className="mb-6 text-lg font-bold text-white">Hỗ trợ</h4>
							<ul className="mb-8 space-y-3">
								{footerLinks.support.map((link, index) => (
									<li key={index}>
										<Link
											href={link.href}
											className="hover:text-viettel-400 group flex items-center text-gray-300 transition-colors duration-200"
										>
											<span className="bg-viettel-500 mr-3 h-2 w-2 rounded-full opacity-0 transition-opacity group-hover:opacity-100"></span>
											{link.name}
										</Link>
									</li>
								))}
							</ul>

							{/* Social Links */}
							<div>
								<h5 className="mb-4 text-sm font-semibold text-white">Theo dõi chúng tôi</h5>
								<div className="flex space-x-4">
									{socialIcons.map((social, index) => (
										<Link
											key={index}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-gray-300 transition-all duration-300 hover:bg-gray-600 ${social.color}`}
										>
											<social.icon className="h-5 w-5" />
										</Link>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-700">
					<div className="container-custom p-8">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0"
						>
							<div className="text-sm text-gray-400">
								<p>&copy; 2025 {companyName}. Tất cả các quyền được bảo lưu.</p>
							</div>

							<div className="flex items-center space-x-6 text-sm text-gray-400">
								<Link href="#" className="transition-colors hover:text-white">
									Chính sách bảo mật
								</Link>
								<Link href="#" className="transition-colors hover:text-white">
									Điều khoản sử dụng
								</Link>
								<Link href="#" className="transition-colors hover:text-white">
									Sitemap
								</Link>
							</div>

							<div className="flex items-center space-x-2 text-sm text-gray-400">
								<Star className="h-4 w-4 fill-current text-yellow-400" />
								<span>4.9/5 từ 1,000+ đánh giá</span>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
