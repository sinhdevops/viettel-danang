export function middleware() {}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.webp|.*\\.css|.*\\.js).*)",
	],
};
