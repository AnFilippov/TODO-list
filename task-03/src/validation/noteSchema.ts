import * as yup from "yup";

export const noteSchema = yup.object().shape({
	id: yup.number(),
	category: yup.string(),
	text: yup.string(),
	isArchive: yup.boolean(),
	timeCreate: yup.date(),
	date: yup.array().of(yup.number()),
});
