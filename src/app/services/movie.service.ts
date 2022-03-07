import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { url } from "inspector";
import { Observable } from "rxjs";
import {  } from "rxjs/operators";
import { Movies } from "../models/movıes";

@Injectable()
export class MovieService {
    url:string = "http://localhost:3333/movies";

    constructor(private http: HttpClient) { }

   
    getMovies(categoryId:number): Observable<Movies[]> {

       let newUrl:string = this.url;

        if (categoryId) 
        newUrl += "?categoryId=" + categoryId;

        return this.http.get<Movies[]>(newUrl);
    }

    getMovieById(id:number): Observable<Movies> {

        let newUrl:string = this.url;
 
         if (id) 
         newUrl += "/" + id;
 
         return this.http.get<Movies>(newUrl);
     }
    
    
}