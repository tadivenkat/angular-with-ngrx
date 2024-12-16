import { inject, Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { add, loadBookmarks, loadBookmarksFailure, loadBookmarksSuccess, remove, removeAll, update, updateAll } from "../actions/app.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { BookmarkService } from "../../../services/bookmark.service";
import { AppState } from "../app.state";

@Injectable()
export class AppEffects {
    constructor(private bookmarkService: BookmarkService) {}
    private actions$ = inject(Actions);
    loadBookmarksEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadBookmarks),
            switchMap(() => {
                return this.bookmarkService
                        .getAll()
                        .pipe(
                            map((bookmarks) => loadBookmarksSuccess({ bookmarks })),
                            catchError((error) => of(loadBookmarksFailure({ error }))))
            })
        );
    });

    addBookmarkEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(add),
            switchMap((action) => {
                return this.bookmarkService
                        .save(action.bookmark)
                        .pipe(map((bookmark) => loadBookmarks()))
            })
        );
    });
}