"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn, phoneNumber } from "@/lib/utils";
import { Menu, X, Phone, Wifi, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ href: "#home", label: "Trang chủ" },
		{ href: "#pricing", label: "Bảng giá", hasDropdown: true },
		{ href: "#services", label: "Dịch vụ" },
		{ href: "#benefits", label: "Ưu điểm" },
		{ href: "#contact", label: "Liên hệ" },
	];

	const pricingDropdown = [
		{ href: "#pricing-personal", label: "Gói cá nhân" },
		{ href: "#pricing-combo", label: "Gói combo" },
		{ href: "#pricing-business", label: "Doanh nghiệp" },
	];

	return (
		<>
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={cn(
					"fixed top-0 right-0 left-0 z-50 transition-all duration-300",
					isScrolled ? "bg-white/95 shadow-lg backdrop-blur-lg" : "bg-transparent",
				)}
			>
				<div className="container-custom">
					<div className="flex h-16 items-center justify-between md:h-20">
						{/* Logo */}
						<Link href="/" className="flex items-center space-x-3">
							<div className="from-viettel-500 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br to-orange-600">
								<Wifi className="h-6 w-6 text-white" />
							</div>
							<div className="hidden sm:block">
								<h1 className="text-gradient text-xl font-bold">Viettel Đà Nẵng</h1>
								<p className="text-xs text-gray-600">Internet Cáp Quang</p>
							</div>
						</Link>

						{/* Desktop Navigation */}
						<nav className="hidden items-center space-x-8 lg:flex">
							{navItems.map((item) => (
								<div key={item.href} className="group relative">
									<Link
										href={item.href}
										className={cn(
											"hover:text-viettel-600 flex items-center space-x-1 font-medium text-gray-700 transition-colors duration-200",
											isScrolled ? "text-gray-700" : "text-gray-800",
										)}
									>
										<span>{item.label}</span>
										{item.hasDropdown && (
											<ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
										)}
									</Link>

									{/* Dropdown Menu */}
									{item.hasDropdown && (
										<div className="invisible absolute top-full left-0 mt-2 w-48 translate-y-2 transform rounded-lg border bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
											<div className="py-2">
												{pricingDropdown.map((dropItem) => (
													<Link
														key={dropItem.href}
														href={dropItem.href}
														className="hover:bg-viettel-50 hover:text-viettel-600 block px-4 py-2 text-sm text-gray-700 transition-colors duration-200"
													>
														{dropItem.label}
													</Link>
												))}
											</div>
										</div>
									)}
								</div>
							))}
						</nav>

						{/* CTA Buttons */}
						<div className="hidden items-center space-x-4 md:flex">
							<Button
								variant="outline"
								size="sm"
								asChild
								className="border-viettel-200 text-viettel-600 hover:bg-viettel-50"
							>
								<Link href={`tel:${phoneNumber}`}>
									<Phone className="mr-2 h-4 w-4" />
									Tư vấn
								</Link>
							</Button>
							<Button variant="viettel" size="sm" asChild className="pulse-glow">
								<Link href={`tel:${phoneNumber}`}>Đăng ký ngay</Link>
							</Button>
						</div>

						{/* Mobile Menu Toggle */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100 lg:hidden"
						>
							{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</motion.header>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="fixed inset-0 z-40 lg:hidden"
						style={{ top: "80px" }}
					>
						<div className="border-t bg-white/95 shadow-lg backdrop-blur-lg">
							<nav className="container-custom py-6">
								<div className="space-y-4">
									{navItems.map((item) => (
										<div key={item.href}>
											<Link
												href={item.href}
												onClick={() => setIsMenuOpen(false)}
												className="hover:text-viettel-600 block py-3 text-lg font-medium text-gray-700 transition-colors duration-200"
											>
												{item.label}
											</Link>
											{item.hasDropdown && (
												<div className="mt-2 ml-4 space-y-2">
													{pricingDropdown.map((dropItem) => (
														<Link
															key={dropItem.href}
															href={dropItem.href}
															onClick={() => setIsMenuOpen(false)}
															className="hover:text-viettel-600 block py-2 text-gray-600 transition-colors duration-200"
														>
															{dropItem.label}
														</Link>
													))}
												</div>
											)}
										</div>
									))}
								</div>

								<div className="mt-8 space-y-4">
									<Button
										variant="outline"
										size="lg"
										asChild
										className="border-viettel-200 text-viettel-600 hover:bg-viettel-50 w-full"
									>
										<Link href={`tel:${phoneNumber}`}>
											<Phone className="mr-2 h-4 w-4" />
											Gọi tư vấn miễn phí
										</Link>
									</Button>
									<Button variant="viettel" size="lg" asChild className="w-full">
										<Link href={`tel:${phoneNumber}`}>Đăng ký lắp đặt ngay</Link>
									</Button>
								</div>
							</nav>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
