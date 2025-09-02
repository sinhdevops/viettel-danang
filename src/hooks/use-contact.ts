import { http } from "@/configs/http.config";
import { useMutation } from "@tanstack/react-query";

const uploadContact = async ({ ...payload }) => {
	const res = await http.post("/api/contact", { payload });

	return res;
};

export const useContact = () => {
	return useMutation({
		mutationFn: uploadContact,
	});
};
