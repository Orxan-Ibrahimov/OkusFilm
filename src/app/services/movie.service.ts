import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movies } from "../models/movıes";

@Injectable()
export class MovieService {
    url:string = "http://localhost:3333/movies";

    constructor(private http: HttpClient) { }

    getMovies(): Observable<Movies[]> {
        return this.http.get<Movies[]>(this.url);
    }
}