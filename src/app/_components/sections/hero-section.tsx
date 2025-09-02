"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { phoneNumber } from "@/lib/utils";
import { motion } from "framer-motion";
import { Wifi, Clock, Shield, Camera, Tv, Phone, CheckCircle, Star, Zap } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
	const features = [
		{
			icon: Clock,
			title: "Lắp nhanh 2H",
			desc: "Cam kết lắp đặt trong 2 giờ",
		},
		{
			icon: Wifi,
			title: "WiFi 6 miễn phí",
			desc: "Modem WiFi 6 siêu mạnh",
		},
		{
			icon: Camera,
			title: "2 Camera miễn phí",
			desc: "Xoay 360° đàm thoại 2 chiều",
		},
		{
			icon: Tv,
			title: "Smart TV Box",
			desc: "Biến TV thường thành Smart TV",
		},
	];

	const benefits = [
		"Thủ tục chỉ cần chụp CCCD",
		"Tặng 1 tháng cước khi đóng trước",
		"Cam kết giá rẻ nhất thị trường",
		"Hỗ trợ kỹ thuật 24/7",
	];

	return (
		<section id="home" className="relative top-16 flex min-h-screen items-center overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
			<div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center"></div>

			{/* Floating Elements */}
			<div className="bg-viettel-100 absolute top-20 left-10 h-20 w-20 animate-pulse rounded-full opacity-70 blur-xl"></div>
			<div className="absolute right-16 bottom-32 h-32 w-32 animate-pulse rounded-full bg-orange-100 opacity-60 blur-2xl delay-1000"></div>
			<div className="absolute top-1/2 left-1/4 h-16 w-16 animate-pulse rounded-full bg-blue-100 opacity-50 blur-lg delay-500"></div>

			<div className="container-custom relative z-10 mx-auto">
				<div className="grid items-center justify-between gap-12 lg:grid-cols-2">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center lg:text-left"
					>
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="from-viettel-100 text-viettel-700 mb-6 inline-flex items-center rounded-full bg-gradient-to-r to-orange-100 px-4 py-2 text-sm font-medium"
						>
							<Star className="text-viettel-500 mr-2 h-4 w-4" />
							#1 Nhà cung cấp Internet tại Đà Nẵng
						</motion.div>

						{/* Main Heading */}
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
						>
							<span className="text-gradient">Lắp Internet</span>
							<br />
							<span className="text-gray-900">Viettel Đà Nẵng</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="mb-8 text-xl leading-relaxed text-gray-600 md:text-2xl"
						>
							<span className="text-viettel-600 font-semibold">Lắp nhanh trong 2H</span> •
							<span className="font-semibold text-orange-600"> Cam kết giá rẻ nhất</span>
						</motion.p>

						{/* Benefits */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="mb-8 space-y-3"
						>
							{benefits.map((benefit, index) => (
								<div key={index} className="flex items-center">
									<CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
									<span className="text-gray-700">{benefit}</span>
								</div>
							))}
						</motion.div>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="mb-12 flex flex-col gap-4 sm:flex-row"
						>
							<Button variant="viettel" size="xl" asChild className="group pulse-glow">
								<Link href={`tel:${phoneNumber}`}>
									<Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
									Đăng ký lắp đặt ngay
								</Link>
							</Button>
							<Button
								variant="outline"
								size="xl"
								asChild
								className="border-viettel-200 text-viettel-600 hover:bg-viettel-50 border-2"
							>
								<Link href="#pricing">
									<Zap className="mr-2 h-5 w-5" />
									Xem bảng giá
								</Link>
							</Button>
						</motion.div>

						{/* Trust Indicators */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
							className="flex items-center justify-center space-x-6 text-sm text-gray-500 lg:justify-start"
						>
							<div className="flex items-center">
								<Shield className="mr-1 h-4 w-4 text-green-500" />
								Cam kết chính hãng
							</div>
							<div className="flex items-center">
								<Clock className="mr-1 h-4 w-4 text-blue-500" />
								Lắp đặt 24/7
							</div>
						</motion.div>
					</motion.div>

					{/* Right Content - Features Grid */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="grid grid-cols-2 gap-6"
					>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 + index * 0.1 }}
								className="card-hover rounded-2xl border border-white/20 bg-white/70 p-6 text-center shadow-lg backdrop-blur-sm"
							>
								<div className="from-viettel-500 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br to-orange-600 transition-transform duration-300 group-hover:scale-110">
									<feature.icon className="h-8 w-8 text-white" />
								</div>
								<h3 className="mb-2 font-bold text-gray-900">{feature.title}</h3>
								<p className="text-sm leading-relaxed text-gray-600">{feature.desc}</p>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Bottom Stats */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1 }}
					className="mt-20 grid grid-cols-2 gap-8 text-center md:grid-cols-4"
				>
					{[
						{ number: "100K+", label: "Khách hàng tin tưởng" },
						{ number: "2H", label: "Thời gian lắp đặt" },
						{ number: "24/7", label: "Hỗ trợ kỹ thuật" },
						{ number: "99.9%", label: "Độ ổn định mạng" },
					].map((stat, index) => (
						<div key={index} className="space-y-2">
							<div className="text-gradient text-3xl font-bold md:text-4xl">{stat.number}</div>
							<div className="text-sm text-gray-600">{stat.label}</div>
						</div>
					))}
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
			>
				<div className="border-viettel-300 flex h-10 w-6 justify-center rounded-full border-2">
					<div className="bg-viettel-500 mt-2 h-3 w-1 animate-bounce rounded-full"></div>
				</div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
