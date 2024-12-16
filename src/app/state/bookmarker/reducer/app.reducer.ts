import { createReducer, on } from "@ngrx/store";
import { AppState } from "../app.state";
import { add, loadBookmarks, loadBookmarksFailure, loadBookmarksSuccess, remove, removeAll, update, updateAll } from "../actions/app.actions";
import { status } from "../../../enums/status.enum";

export const initialState: AppState = {
    bookmarks: [],
    error: '',
    status: status.PENDING
}

export const bookmarkReducer = createReducer(
    initialState,
    on(add, (state, {bookmark}) => ({ ...state, bookmarks: [...state.bookmarks, bookmark] })),
    on(update, (state, { bookmark }) => ({ ...state, bookmarks: state.bookmarks.map(b => b.id === bookmark.id ? bookmark : b) })),
    on(updateAll, (state, { bookmarks }) => ({ ...state, bookmarks: bookmarks })),
    on(remove, (state, { id }) => ({ ...state, bookmarks: state.bookmarks.filter(b => b.id !== id) })),
    on(removeAll, state => initialState),
    on(loadBookmarks, state => ({ ...state, status: status.LOADING })),
    on(loadBookmarksSuccess, (state, { bookmarks }) => ({ ...state, bookmarks, error: '', status: status.SUCCESS })),
    on(loadBookmarksFailure, (state, { error }) => ({ ...state, error, status: status.ERROR }))
)