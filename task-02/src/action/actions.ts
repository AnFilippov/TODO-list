import { noteObj } from "../components/NewNoteInput/NewNoteInput";
import { Action, ActionTypes } from "../types/actionType";

export const addNote = (note: noteObj): Action => ({
	type: ActionTypes.ADD_NOTE,
	payload: note,
});

export const removeNote = (note: noteObj): Action => ({
	type: ActionTypes.DELETE_NOTE,
	payload: note.id,
});

export const removeArchiveNote = (note: noteObj): Action => ({
	type: ActionTypes.DELETE_ARCHIVE_NOTE,
	payload: note.id,
});

export const archiveNote = (note: noteObj): Action => ({
	type: ActionTypes.ARCHIVE_NOTE,
	payload: note,
});

export const unArchiveNote = (note: noteObj): Action => ({
	type: ActionTypes.UNARCHIVE_NOTE,
	payload: note,
});

export const archivedNote = (): Action => ({
	type: ActionTypes.ARCHIVED_NOTE,
});

export const editNote = (note: noteObj): Action => ({
	type: ActionTypes.EDIT_NOTE,
	payload: note,
});
