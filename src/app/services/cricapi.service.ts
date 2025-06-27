import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CricapiService {

   private apiUrl = 'https://api.cricapi.com/v1/currentMatches?apikey=8f40fd05-5a42-482c-894b-4c43b488cabb&offset=0';
   private newsapiurl ='https://newsapi.org/v2/everything?q=dhoni&from=2025-05-27&sortBy=publishedAt&apiKey=01768a9436f340769c61bf157000f87f';

  constructor(private http: HttpClient) { }

  getCurrentMatches(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getcurrentnews(): Observable<any> {
    return this.http.get<any>(this.newsapiurl);
  }

  getSeries(): Observable<any> {
  const url = 'https://api.cricapi.com/v1/series?apikey=8f40fd05-5a42-482c-894b-4c43b488cabb&offset=0';
  return this.http.get<any>(url);
}
}
