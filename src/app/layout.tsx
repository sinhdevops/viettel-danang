import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { seoConfig } from "@/lib/utils";
import "@/styles/globals.css";
import Script from "next/script";
import MainLayout from "@/layout/main-layout";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f97316" },
		{ media: "(prefers-color-scheme: dark)", color: "#ea580c" },
	],
};

export const metadata: Metadata = {
	title: {
		default: seoConfig.title,
		template: "%s | Viettel Đà Nẵng",
	},
	description: seoConfig.description,
	keywords: seoConfig.keywords,
	authors: [
		{
			name: "Viettel Đà Nẵng",
			url: "https://viettel-danang.vercel.app",
		},
	],
	creator: "Viettel Đà Nẵng",
	publisher: "Viettel Đà Nẵng",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://viettel-danang.vercel.app"),
	alternates: {
		canonical: "/",
		languages: {
			"vi-VN": "/vi",
			"en-US": "/en",
		},
	},
	openGraph: {
		type: "website",
		locale: "vi_VN",
		url: "https://viettel-danang.vercel.app",
		siteName: "Viettel Đà Nẵng",
		title: seoConfig.title,
		description: seoConfig.description,
		images: [
			{
				url: seoConfig.ogImage,
				width: 1200,
				height: 630,
				alt: "Lắp Internet Viettel Đà Nẵng",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: seoConfig.title,
		description: seoConfig.description,
		images: [seoConfig.ogImage],
		creator: "@viettel",
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
	other: {
		"google-site-verification": "your-google-verification-code",
		"msapplication-TileColor": "#f97316",
		"msapplication-config": "/browserconfig.xml",
	},
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Viettel Đà Nẵng",
	image: "https://viettel-danang.vercel.app/og-image.jpg",
	"@id": "https://viettel-danang.vercel.app",
	url: "https://viettel-danang.vercel.app",
	telephone: "0974357000",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Đà Nẵng",
		addressLocality: "Đà Nẵng",
		addressRegion: "Đà Nẵng",
		postalCode: "550000",
		addressCountry: "VN",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 16.0471659,
		longitude: 108.1716864,
	},
	openingHoursSpecification: {
		"@type": "OpeningHoursSpecification",
		dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		opens: "00:00",
		closes: "23:59",
	},
	sameAs: ["https://facebook.com/viettel", "https://youtube.com/viettel", "https://twitter.com/viettel"],
	priceRange: "$$",
	description: seoConfig.description,
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Gói cước Internet Viettel",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Internet cáp quang Home 100",
					description: "Gói internet 100 Mbps cho hộ gia đình",
				},
				price: "200000",
				priceCurrency: "VND",
				availability: "https://schema.org/InStock",
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Combo Internet + TV",
					description: "Internet + 160 kênh truyền hình",
				},
				price: "320000",
				priceCurrency: "VND",
				availability: "https://schema.org/InStock",
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="vi" className="scroll-smooth">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
				{/* Additional meta tags */}
				<meta name="theme-color" content="#f97316" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="Viettel Đà Nẵng" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-tap-highlight" content="no" />

				{/* Preconnect to external domains */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

				{/* DNS Prefetch */}
				<link rel="dns-prefetch" href="//www.google-analytics.com" />
				<link rel="dns-prefetch" href="//www.googletagmanager.com" />
			</head>
			<body className={inter.className}>
				<Script
					id="structured-data"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
				<MainLayout>{children}</MainLayout>

				{/* Analytics Scripts */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
              // Google Analytics or other tracking scripts
              console.log('Website loaded successfully');
            `,
					}}
				/>
			</body>
		</html>
	);
}
