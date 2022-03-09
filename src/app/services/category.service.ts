import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Category } from "../models/category";

@Injectable()

export class CategoryService {
    constructor(private http: HttpClient) { }

    // url: string = "http://localhost:3333/categories";
    firebase_url: string = "https://app-movie-ae188-default-rtdb.firebaseio.com/";


    getCategories(): Observable<Category[]> {

        return this.http.get<Category[]>(this.firebase_url + 'categories.json').pipe(
            map(data => {
                const categories:Category[] = [];

                for (const key in data) {
                    if (Object.prototype.hasOwnProperty.call(data, key)) {
                        const element = data[key];
                        categories.push({...data[key], id:key});                        
                    }
                }                              
                return categories;
            }),
            // tap(data => console.log(data))

        );
    }

    CreateCategory(category: Category) {

        let newUrl = this.firebase_url;

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Token'
            })
        };

        return this.http.post(newUrl + 'categories.json', category, httpOptions);
    }
}