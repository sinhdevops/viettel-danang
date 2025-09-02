import { InputValidation } from "@/components/input";
import SelectValidation from "@/components/select/select-validation";
import { TextareaValidation } from "@/components/textarea/textarea-validation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useContact } from "@/hooks/use-contact";
import { User, Smartphone, MapPin, Building, MessageSquare, Send } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

const serviceOptions = [
	{ label: "Internet gia đình", value: "internet-gia-dinh" },
	{ label: "Combo Internet + TV", value: "combo-internet-tv" },
	{ label: "Internet doanh nghiệp", value: "internet-doanh-nghiep" },
	{ label: "Tư vấn gói cước", value: "tu-van-goi-cuoc" },
	{ label: "Hỗ trợ kỹ thuật", value: "ho-tro-ky-thuat" },
	{ label: "Khác", value: "khac" },
];

const INITIAL_VALUES = {
	name: "",
	phone: "",
	address: "",
	service: serviceOptions[0].value,
	message: "",
};

function ContactForm() {
	const methods = useForm({ defaultValues: INITIAL_VALUES });
	const { handleSubmit } = methods;
	const { mutate, isPending } = useContact();
	const submitHandler = handleSubmit((values) => {
		mutate(values, {
			onSuccess: () => {
				toast.success("Gửi tin nhắn thành công");
			},
			onError: () => {
				toast.error("Gửi không thành công");
			},
		});
	});

	return (
		<FormProvider {...methods}>
			<form onSubmit={submitHandler} className="space-y-6">
				<div className="grid gap-4 sm:grid-cols-2">
					<div className="space-y-2">
						<Label htmlFor="name" className="text-sm font-medium text-gray-700">
							<User className="mr-2 inline h-4 w-4" />
							Họ và tên *
						</Label>
						<InputValidation
							id="name"
							name="name"
							placeholder="Nhập họ và tên"
							required
							className="focus:border-viettel-500 border-gray-300"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="phone" className="text-sm font-medium text-gray-700">
							<Smartphone className="mr-2 inline h-4 w-4" />
							Số điện thoại *
						</Label>
						<InputValidation
							id="phone"
							type="tel"
							placeholder="Nhập số điện thoại"
							name="phone"
							required
							className="focus:border-viettel-500 border-gray-300"
						/>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="address" className="text-sm font-medium text-gray-700">
						<MapPin className="mr-2 inline h-4 w-4" />
						Địa chỉ lắp đặt *
					</Label>
					<InputValidation
						id="address"
						name="address"
						placeholder="Nhập địa chỉ cần lắp đặt"
						required
						className="focus:border-viettel-500 border-gray-300"
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="service" className="text-sm font-medium text-gray-700">
						<Building className="mr-2 inline h-4 w-4" />
						Dịch vụ quan tâm
					</Label>
					<SelectValidation name="service" options={serviceOptions} className="w-full" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="message" className="text-sm font-medium text-gray-700">
						<MessageSquare className="mr-2 inline h-4 w-4" />
						Ghi chú thêm
					</Label>
					<TextareaValidation
						id="message"
						name="message"
						placeholder="Nhập yêu cầu hoặc thắc mắc của bạn..."
						rows={4}
						className="focus:border-viettel-500 resize-none border-gray-300"
					/>
				</div>

				<Button disabled={isPending} type="submit" variant="viettel" size="lg" className="pulse-glow w-full">
					<Send className="mr-2 h-4 w-4" />
					Gửi yêu cầu tư vấn
				</Button>

				<p className="text-center text-xs text-gray-500">
					Bằng cách gửi form này, bạn đồng ý để chúng tôi liên hệ tư vấn qua số điện thoại đã cung cấp.
				</p>
			</form>
		</FormProvider>
	);
}

export default ContactForm;
