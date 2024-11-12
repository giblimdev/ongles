import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://votre-url-backend/articles'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  createArticle(article: Article): Observable<any> {
    return this.http.post<Article>(this.apiUrl, article);
  }
}