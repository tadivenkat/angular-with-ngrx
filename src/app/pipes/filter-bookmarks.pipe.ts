import { Pipe, PipeTransform } from '@angular/core';
import { Bookmark } from '../model/bookmark.type';

@Pipe({
  name: 'filterBookmarks',
  standalone: true
})
export class FilterBookmarksPipe implements PipeTransform {

  transform(bookmarks: Bookmark[], searchTerm: string): unknown {
    return bookmarks.filter(bookmark => bookmark.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
