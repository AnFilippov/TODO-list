import { Request, Response, NextFunction } from "express";
import { noteSchema } from "../validation/noteSchema";

export const validation =
	(schema: typeof noteSchema) =>
	async (req: Request, res: Response, next: NextFunction) => {
		const body = req.body;

		try {
			const v = await schema.validate(body);
			console.log(v);
			return next();
		} catch (error) {
			next(error);
		}
	};
