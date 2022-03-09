import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay, map, tap } from "rxjs/operators";
import { Movies } from "../models/movıes";

@Injectable()
export class MovieService {
    firebase_url: string = "https://app-movie-ae188-default-rtdb.firebaseio.com/";

    constructor(private http: HttpClient) { }


    getMovies(categoryId: number): Observable<Movies[]> {
        let newUrl: string = this.firebase_url + 'movies.json';    

        return this.http.get<Movies[]>(newUrl)
            .pipe(
                map(data => {
                    const movies: Movies[] = [];
                    
                    for (const key in data) {
                        if (Object.prototype.hasOwnProperty.call(data, key)) {
                            const element = data[key];

                            if (categoryId) {
                                if(categoryId === data[key].categoryId){
                                    movies.push({ ...data[key], id: key });
                                }                               
                            }
                            else{
                                movies.push({ ...data[key], id: key });
                            }
                        }
                    }
                    return movies;
                }),
                // delay(1000)
            );
    }

    getMovieById(id: string): Observable<Movies> {

        let newUrl: string = this.firebase_url + "movies";
        if (id)
            newUrl += "/" + id + ".json";

        return this.http.get<Movies>(newUrl);
    }

    CreateMovie(movie: Movies): Observable<Movies> {

        let newUrl: string = this.firebase_url

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Token'
            })
        };
        return this.http.post<Movies>(newUrl + 'movies.json', movie, httpOptions);
    }

}