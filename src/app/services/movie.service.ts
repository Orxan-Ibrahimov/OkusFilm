import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { url } from "inspector";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Movies } from "../models/movıes";

@Injectable()
export class MovieService {
    // url:string = "http://localhost:3333/movies";
    firebase_url: string = "https://app-movie-ae188-default-rtdb.firebaseio.com/";

    constructor(private http: HttpClient) { }


    getMovies(categoryId: number): Observable<Movies[]> {

        let newUrl: string = this.firebase_url + 'movies.json';

        if (categoryId)
            newUrl += "?categoryId=" + categoryId;

        return this.http.get<Movies[]>(newUrl)
            .pipe(
                map(data => {
                    const movies:Movies[] = [];
                    for (const key in data) {
                        if (Object.prototype.hasOwnProperty.call(data, key)) {
                            const element = data[key];
                            movies.push({...data[key],id:key});                            
                        }
                    }                    
                    return movies;
                }),
            );
    }

    getMovieById(id: number): Observable<Movies> {

        // let newUrl:string = this.url;

        //  if (id) 
        //  newUrl += "/" + id;

        let newUrl: string = this.firebase_url + "movies";
        if (id) 
        newUrl += "/" + id + ".json";

        return this.http.get<Movies>(newUrl);
    }

    CreateMovie(movie: Movies): Observable<Movies> {

        let newUrl: string = this.firebase_url
        // let newUrl:string = this.url

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Token'
            })
        };
        return this.http.post<Movies>(newUrl + 'movies.json', movie, httpOptions);
    }

}