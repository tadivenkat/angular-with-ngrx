import {createAction, props} from "@ngrx/store";
import { Bookmark } from "../../../model/bookmark.type";

export const add = createAction("[Bookmark] Add Bookmark", props<{ bookmark: Bookmark }>());
export const update = createAction("[Bookmark] Update Bookmark", props<{ bookmark: Bookmark }>());
export const updateAll = createAction("[Bookmark] Update All Bookmarks", props<{ bookmarks: Bookmark[] }>());
export const remove = createAction("[Bookmark] Remove Bookmark", props<{ id: number }>());
export const removeAll = createAction("[Bookmark] Remove All Bookmarks");

export const loadBookmarks = createAction("[Bookmark] Load Bookmarks");
export const loadBookmarksSuccess = createAction("[Bookmark] Load Bookmarks Success", props<{ bookmarks: Bookmark[] }>());
export const loadBookmarksFailure = createAction("[Bookmark] Load Bookmarks Failure", props<{ error: string }>());