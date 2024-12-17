import { inject, Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { add, loadBookmarks, loadBookmarksFailure, loadBookmarksSuccess, remove, removeAll, update, updateAll } from "../actions/app.actions";
import { catchError, concatMap, exhaustMap, map, mergeMap, of, switchMap } from "rxjs";
import { BookmarkService } from "../../../services/bookmark.service";

@Injectable()
export class AppEffects {
    constructor(private bookmarkService: BookmarkService) {}
    private actions$ = inject(Actions);
    loadBookmarksEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadBookmarks),
            exhaustMap(() => {
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
            concatMap((action) => {
                return this.bookmarkService
                        .save(action.bookmark)
                        .pipe(map((bookmark) => loadBookmarks()))
            })
        );
    });

    removeBookmarkEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(remove),
            mergeMap((action) => {
                return this.bookmarkService
                        .delete(action.id)
                        .pipe(map(() => loadBookmarks()))
            })
        );
    });

    updateBookmarkEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(update),
            concatMap((action) => {
                return this.bookmarkService
                        .update(action.bookmark)
                        .pipe(map(() => loadBookmarks()))
            })
        );
    });
}