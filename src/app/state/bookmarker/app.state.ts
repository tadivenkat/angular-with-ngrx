import { status } from "../../enums/status.enum";
import { Bookmark } from "../../model/bookmark.type";

export interface AppState {
    bookmarks: Bookmark[];
    error: string;
    status: status;
}