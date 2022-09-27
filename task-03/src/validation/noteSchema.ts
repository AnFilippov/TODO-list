import * as yup from "yup";

export const noteSchema = yup.object({
	id: yup.string(),
	category: yup.string(),
	text: yup.string(),
	isArchive: yup.boolean(),
	timeCreate: yup.mixed(),
	date: yup.array().of(yup.number()),
});
