import {Component, EventEmitter, Input, Pipe} from '@angular/core';
import data from '../../assets/json/movie.json';

interface Movie {
  id: String,
  name: String,
  rating: Number
}

let ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent {
  name = 'Angular';
  ratings = ratings;
  movies: Movie[] = data;
  searchbar:any;
  searchbarnb:any;
  search(event: any) {
    let moviesTemp = data;
    return this.movies = moviesTemp.filter((e) => { return e.name.toLowerCase().includes(event.toLowerCase()) });
  }
}
