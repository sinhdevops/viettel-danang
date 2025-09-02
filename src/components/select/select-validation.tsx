import { Controller, useFormContext } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectValidationProps {
	name: string;
	className?: string;
	options: {
		label: string;
		value: string;
	}[];
	placeholder?: string;
}

function SelectValidation({ name, options, className, placeholder }: SelectValidationProps) {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<Select
					value={field.value || ""} // ✅ đảm bảo controlled value
					onValueChange={field.onChange} // ✅ cập nhật state react-hook-form
				>
					<SelectTrigger className={className || "focus:border-viettel-500 border-gray-300"}>
						<SelectValue placeholder={placeholder || "Chọn dịch vụ bạn quan tâm"} />
					</SelectTrigger>
					<SelectContent>
						{options.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			)}
		/>
	);
}

export default SelectValidation;
