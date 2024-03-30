import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogPostCardService {
  private apiUrl = 'https://dev.to/api/articles';

  constructor(private http: HttpClient) { }

  getBlogPosts(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

}
