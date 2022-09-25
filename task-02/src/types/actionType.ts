import { noteObj } from "../components/NewNoteInput";

export interface ActionAdd { type: "ADD_NOTE"; payload: noteObj };
export interface ActionDel { type: "DELETE_NOTE"; payload: string };
export interface ActionArchDel { type: "DELETE_ARCHIVE_NOTE"; payload: string };
export interface ActionArch { type: "ARCHIVE_NOTE"; payload: noteObj };
export interface ActionUnArch { type: "UNARCHIVE_NOTE"; payload: noteObj };
export interface Archived { type: "ARCHIVED_NOTE"; };

export type Action = ActionAdd | ActionDel | ActionArch | Archived | ActionArchDel | ActionUnArch

export enum ActionTypes {
  ADD_NOTE = "ADD_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
  ARCHIVE_NOTE = "ARCHIVE_NOTE",
  ARCHIVED_NOTE = "ARCHIVED_NOTE",
  DELETE_ARCHIVE_NOTE = "DELETE_ARCHIVE_NOTE",
  UNARCHIVE_NOTE = "UNARCHIVE_NOTE",
}