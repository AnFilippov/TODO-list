import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import * as yup from "yup";
import { validation } from "../middlewares/validation";
import { noteSchema } from "../validation/noteSchema";

interface Note extends yup.InferType<typeof noteSchema> {
	id: any;
	category: string;
	text: string;
	isArchive: boolean;
	timeCreate: any;
	date: any[];
}

const getNotes = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let result: AxiosResponse = await axios.get(
			`https://6332b061a54a0e83d25613c4.mockapi.io/notes`,
		);
		let notes: [Note] = result.data;
		return res.status(200).json({
			message: notes,
		});
	} catch (error) {
		next(error);
	}
};

const getNote = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let id: string = req.params.id;
		let result: AxiosResponse = await axios.get(
			`https://6332b061a54a0e83d25613c4.mockapi.io/notes/${id}`,
		);
		let notes: Note = result.data;
		return res.status(200).json({
			message: notes,
		});
	} catch (error) {
		next(error);
	}
};

const updateNote = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let id: string = req.params.id;

		let text: string = req.body.text ?? null;
		let category: string = req.body.category ?? null;
		let isArchive: boolean = req.body.isArchive ?? null;
		let date: any[] = req.body.date ?? null;

		let response: AxiosResponse = await axios.patch(
			`https://6332b061a54a0e83d25613c4.mockapi.io/notes/${id}`,

			{
				...(text && { text }),
				...(category && { category }),
				...(isArchive && { isArchive }),
				...(date && { date }),
			},
		);

		return res.status(200).json({
			message: response.data,
		});
	} catch (error) {
		next(error);
	}
};

const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let id: string = req.params.id;

		let response: AxiosResponse = await axios.delete(
			`https://6332b061a54a0e83d25613c4.mockapi.io/notes/${id}`,
		);

		return res.status(200).json({
			message: "note deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};

const addNote = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let category: string = req.body.category;
		let text: string = req.body.text;
		let timeCreate: any = req.body.timeCreate;

		let response: AxiosResponse = await axios.post(
			`https://6332b061a54a0e83d25613c4.mockapi.io/notes`,

			{
				category,
				text,
				isArchive: false,
				timeCreate: new Date().toLocaleString(),
				date: [],
			},
		);

		return res.status(200).json({
			message: response.data,
		});
	} catch (error) {
		next(error);
	}
};

export default { getNotes, getNote, updateNote, deleteNote, addNote };
