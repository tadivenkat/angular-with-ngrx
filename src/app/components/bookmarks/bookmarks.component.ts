import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from '../../model/bookmark.type';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import moment from 'moment';
import { on, Store } from '@ngrx/store';
import { AppState } from '../../state/bookmarker/app.state';
import { add, loadBookmarks, remove, update } from '../../state/bookmarker/actions/app.actions';
import { selectAllBookmarks, selectBookmarksBySearchTerm, selectStatus } from '../../state/bookmarker/selectors/app.selectors';
import { status } from '../../enums/status.enum';

@Component({
    selector: 'app-bookmarks',
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    templateUrl: './bookmarks.component.html',
    styleUrl: './bookmarks.component.scss'
})
export class BookmarksComponent implements OnInit {
  status$: Observable<status>;
  bookmarks$: Observable<Bookmark[]>;
  bookmarkForm : FormGroup = new FormGroup({});
  bookmarkObject: Bookmark = { id: 0, name: '', url: '', created: new Date() };
  isEditMode: boolean = false;

  constructor(private readonly store: Store<AppState>) {
    this.createForm();
    this.status$ = this.store.select(selectStatus);
    this.bookmarks$ = this.store.select(selectAllBookmarks);
  }

  ngOnInit(): void {
    this.store.dispatch(loadBookmarks());
  }

  onReset() {
    this.bookmarkObject = {name: '', url: '', created: new Date()};
    this.createForm();
    this.isEditMode = false;
  }

  createForm() {
    this.bookmarkForm = new FormGroup({
      name: new FormControl(this.bookmarkObject.name, Validators.required),
      url: new FormControl(this.bookmarkObject.url, Validators.required)
    });
  }

  onSave() {
    if (this.bookmarkForm.invalid) {
      this.bookmarkForm.markAllAsTouched();
      return;
    }
    if (this.isEditMode) {
      this.bookmarkObject = {...this.bookmarkObject, name: this.bookmarkForm.value.name, url: this.bookmarkForm.value.url}
      this.store.dispatch(update({bookmark: this.bookmarkObject}));
    } else {
      this.bookmarkObject = {name: this.bookmarkForm.value.name, url: this.bookmarkForm.value.url, created: moment().toDate()};
      this.store.dispatch(add({bookmark: this.bookmarkObject}));
    }
    this.onReset();
  }

  onEdit(bookmark: Bookmark) {
    this.bookmarkObject = bookmark;
    this.isEditMode = true;
    this.createForm();
  }

  onDelete(id: number) {
    if (confirm(`Are you sure you want to delete this bookmark with id ${id}?`)) {
      this.store.dispatch(remove({id}));
    }
  }

  onSearch(keyEvent: Event) {
    const searchTerm = (keyEvent.target as HTMLInputElement).value;
    if (searchTerm) {
      this.bookmarks$ = this.store.select(selectBookmarksBySearchTerm(searchTerm));
    } else {
      this.bookmarks$ = this.store.select(selectAllBookmarks);
    }
  }
}
