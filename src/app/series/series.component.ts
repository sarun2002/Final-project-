import { Component, OnInit } from '@angular/core';
import { CricapiService } from '../services/cricapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  seriesList: any[] = [];

  constructor(private cricapi: CricapiService) {}

  ngOnInit(): void {
    
    this.cricapi.getSeries().subscribe(
      (res) => {
        this.seriesList = res.data || [];
      },
      (err) => {
        console.error('Error fetching series data:', err);
      }
    );
  }
}
