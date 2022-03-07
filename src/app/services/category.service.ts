import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable()

export class CategoryService {
    constructor(private http: HttpClient) { }

    url: string = "http://localhost:3333/categories";


    getCategories(): Observable<Category[]> {       

        return this.http.get<Category[]>(this.url);
    }
}