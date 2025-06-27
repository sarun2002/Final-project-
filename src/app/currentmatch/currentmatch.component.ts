import { Component, OnInit } from '@angular/core';
import { CricapiService } from '../services/cricapi.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-currentmatch',
  imports: [CommonModule],
  templateUrl: './currentmatch.component.html',
  styleUrls: ['./currentmatch.component.css'] 
})
export class MatchComponent implements OnInit {

  matches: any[] = [];

  constructor(private cricService: CricapiService) { }

  ngOnInit(): void {
    this.cricService.getCurrentMatches().subscribe(
      (response) => {
        this.matches = response.data || [];
      },
      (error) => {
        console.error('Error fetching matches:', error);
      }
    );
  }
}
