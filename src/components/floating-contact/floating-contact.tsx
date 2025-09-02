import { Phone } from "lucide-react";
import { SiZalo } from "react-icons/si";
import { phoneNumber } from "@/lib/utils";

export default function FloatingContact() {
	return (
		<div className="fixed bottom-20 left-4 z-50 flex flex-col gap-4">
			<a
				href={`https://zalo.me/${phoneNumber}`}
				target="_blank"
				rel="noopener noreferrer"
				className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lg transition-transform hover:scale-110"
			>
				<SiZalo className="h-6 w-6" />
			</a>

			<a
				href={`tel:${phoneNumber}`}
				className="flex h-12 w-12 items-center gap-2 rounded-full bg-red-600 px-3 py-2 text-white shadow-lg transition-transform hover:scale-105"
			>
				<Phone className="h-5 w-5" />
			</a>
		</div>
	);
}
