import { Pipe, PipeTransform } from '@angular/core';
import { Movies } from '../models/movıes';
import { MovieComponent } from '../movies/movie/movie.component';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(value: Movies[], text:string): Movies[] {
       
    value = value.filter((data:Movies) => data.name.toLowerCase().indexOf(text.toLowerCase()) != -1);
     
    return value;
  }

}
