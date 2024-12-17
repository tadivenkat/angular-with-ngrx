import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookmark } from '../model/bookmark.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookmarkService {

  allBookmarks: Bookmark[] = [];
  editBookmark: Bookmark = { id: 0, name: '', url: '', created: new Date() };
  filterText: string = '';
  
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>('api/bookmarks');
  }

  public getById(id: number): Observable<Bookmark> {
    return this.http.get<Bookmark>(`api/bookmarks/${id}`);
  }

  public save(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>('api/bookmarks', bookmark);
  }

  public update(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.put<Bookmark>(`api/bookmarks/${bookmark.id}`, bookmark);
  }

  public delete(id: number): Observable<Bookmark> {
    return this.http.delete<Bookmark>(`api/bookmarks/${id}`);
  }
}
