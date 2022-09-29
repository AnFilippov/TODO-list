import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import * as yup from "yup";
import { noteSchema } from "../validation/noteSchema";

interface Note extends yup.InferType<typeof noteSchema> {}

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

const updateNote = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let id: string = req.params.id;
		let response: AxiosResponse = await axios.patch(
			`https://6332b061a54a0e83d25613c4.mockapi.io/notes/${id}`,

			{
				...req.body,
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
		let response: AxiosResponse = await axios.post(
			`https://6332b061a54a0e83d25613c4.mockapi.io/notes`,
			{
				...req.body,
			},
		);

		return res.status(200).json({
			message: response.data,
		});
	} catch (error) {
		next(error);
	}
};

const getNote = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let id: string = req.params.id;
		if (id === "stats") {
			let result: AxiosResponse = await axios.get(
				`https://6332b061a54a0e83d25613c4.mockapi.io/notes`,
			);
			let notes: [Note] = result.data;
			let archived = notes.filter((item) => item.isArchive === true);
			let active = notes.filter((item) => item.isArchive === false);

			let activeTask = 0;
			let activeRand = 0;
			let activeIdea = 0;
			let archTask = 0;
			let archRand = 0;
			let archIdea = 0;

			active.forEach((item) => {
				if (item.category === "Task") {
					activeTask += 1;
				} else if (item.category === "Random Thought") {
					activeRand += 1;
				} else if (item.category === "Idea") {
					activeIdea += 1;
				}
			});

			archived.forEach((item) => {
				if (item.category === "Task") {
					archTask += 1;
				} else if (item.category === "Random Thought") {
					archRand += 1;
				} else if (item.category === "Idea") {
					archIdea += 1;
				}
			});

			let total = [
				{ activeTask: activeTask, archivedTask: archTask },
				{ activeRandom: activeRand, archivedRandom: archRand },
				{ activeIdea: activeIdea, archivedIdea: archIdea },
			];

			let response: AxiosResponse = await axios.patch(
				`https://6332b061a54a0e83d25613c4.mockapi.io/notes/${id}`,

				{
					total,
				},
			);

			return res.status(200).json({
				message: response.data,
			});
		} else {
			let result: AxiosResponse = await axios.get(
				`https://6332b061a54a0e83d25613c4.mockapi.io/notes/${id}`,
			);
			let notes: Note = result.data;
			return res.status(200).json({
				message: notes,
			});
		}
	} catch (error) {
		next(error);
	}
};

export default { getNotes, getNote, updateNote, deleteNote, addNote };
