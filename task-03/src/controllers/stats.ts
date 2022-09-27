import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

interface Note {
	id: any;
	category: string;
	text: string;
	isArchive: boolean;
	timeCreate: any;
	date: any[];
}

const getStats = async (req: Request, res: Response, next: NextFunction) => {
	try {
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

		return res.status(200).json({
			message: total,
		});
	} catch (error) {
		next(error);
	}
};

export default { getStats };
