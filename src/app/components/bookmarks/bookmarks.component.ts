import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bookmark } from '../../model/bookmark.type';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookmarkService } from '../../services/bookmark.service';
import moment from 'moment';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../state/bookmarker/app.state';
import { add, loadBookmarks, loadBookmarksSuccess } from '../../state/bookmarker/actions/app.actions';
import { selectAllBookmarks, selectAppState, selectStatus } from '../../state/bookmarker/selectors/app.selectors';
import { status } from '../../enums/status.enum';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss'
})
export class BookmarksComponent implements OnInit {
  status$: Observable<status>;
  bookmarks$: Observable<Bookmark[]>;
  bookmarkForm : FormGroup = new FormGroup({});
  bookmarkObject: Bookmark = { id: 0, name: '', url: '', created: new Date() };

  constructor(private readonly bookmarkService: BookmarkService, private readonly store: Store<AppState>) {
    this.createForm();
    this.status$ = this.store.select(selectStatus);
    this.bookmarks$ = this.store.select(selectAllBookmarks);
  }

  ngOnInit(): void {
    this.store.dispatch(loadBookmarks());
  }

  createForm() {
    this.bookmarkForm = new FormGroup({
      name: new FormControl(this.bookmarkObject.name, Validators.required),
      url: new FormControl(this.bookmarkObject.url, Validators.required)
    });
  }

  save() {
    this.bookmarkObject = {name: this.bookmarkForm.value.name, url: this.bookmarkForm.value.url, created: moment().toDate()};
    this.store.dispatch(add({bookmark: this.bookmarkObject}));
    this.bookmarkForm.reset();
  }
}
