import { Routes } from '@angular/router';
import { MatchComponent } from './currentmatch/currentmatch.component';
import { MatchesComponent } from './matches/matches.component';
import { Component } from '@angular/core';
import { SeriesComponent } from './series/series.component';
import { NewsComponent } from './news/news.component';



export const routes: Routes = [
{path: '' , component: MatchComponent},
{path: 'matches' , component:MatchesComponent},
{path: 'Series' ,component:SeriesComponent},
{path: 'news', component: NewsComponent}
];
