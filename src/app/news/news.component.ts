import { Component, OnInit } from '@angular/core';
import { CricapiService } from '../services/cricapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles: any[] = [];

  constructor(private cricapi: CricapiService) {}

  ngOnInit(): void {
    this.cricapi.getcurrentnews().subscribe(
      (res) => {
        this.articles = res.articles || [];
      },
      (err) => {
        console.error('Error fetching news:', err);
      }
    );
  }
}
