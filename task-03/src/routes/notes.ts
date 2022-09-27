import express from "express";
import controller from "../controllers/notes";

import { validation } from "../middlewares/validation";
import { noteSchema } from "../validation/noteSchema";
const router = express.Router();

router.get("/notes", controller.getNotes);
router.get("/notes/:id", controller.getNote);
router.patch("/notes/:id", validation(noteSchema), controller.updateNote);
router.delete("/notes/:id", controller.deleteNote);
router.post("/notes", validation(noteSchema), controller.addNote);

export = router;
