import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Bookmark } from "../../../model/bookmark.type";

export const selectAppState = createFeatureSelector<AppState>('bookmarks');

export const selectStatus = createSelector(selectAppState, (state: AppState) => state.status);

export const selectAllBookmarks = createSelector(selectAppState, (state: AppState) => state.bookmarks);

export const selectBookmarkById = (id: number) => createSelector(selectAllBookmarks, (bookmarks: Bookmark[]) => bookmarks.find(bookmark => bookmark.id === id));

export const selectBookmarksBySearchTerm = (searchTerm: string) => createSelector(selectAllBookmarks, (bookmarks: Bookmark[]) => bookmarks.filter(bookmark => 
    bookmark.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    bookmark.url.toLowerCase().includes(searchTerm.toLowerCase())
));