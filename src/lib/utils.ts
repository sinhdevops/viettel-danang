import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPrice(price: number | string): string {
	if (typeof price === "string") {
		return price;
	}
	return new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	}).format(price);
}

export function formatSpeed(speed: number): string {
	if (speed >= 1000) {
		return `${speed / 1000}Gb`;
	}
	return `${speed}Mb`;
}

export const phoneNumber = "0974357000";
export const companyName = "Viettel Đà Nẵng";
export const companyAddress = "Đà Nẵng, Việt Nam";
export const website = "https://viettel-danang.vercel.app";

export const socialLinks = {
	facebook: "https://facebook.com/viettel",
	youtube: "https://youtube.com/viettel",
	twitter: "https://twitter.com/viettel",
};

export const seoConfig = {
	title: "Lắp Internet Viettel Đà Nẵng - Tốc Độ Cao, Giá Rẻ, Lắp Trong 2H",
	description:
		"Lắp đặt internet cáp quang Viettel tại Đà Nẵng nhanh chóng trong 2 giờ. Tặng modem WiFi 6, camera giám sát, box điều khiển giọng nói. Giá rẻ nhất thị trường.",
	keywords:
		"internet viettel đà nẵng, cáp quang viettel, wifi viettel, lắp mạng viettel, internet tốc độ cao đà nẵng",
	ogImage: "/og-image.jpg",
};
