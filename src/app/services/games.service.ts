import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { gamesListUrl , gameDetailsUrl, apiKey } from "../api-info/ApiInfo";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class GamesService {


    constructor(private http: HttpClient) {

    }

    getAll(searchQuery?:string, ordering?:string, pageNumber:number = 1, pageSize:number = 30): Observable<Object> {

        if(searchQuery){
            return this.http.get<Object>(`${gamesListUrl}&search=${searchQuery}&page=${pageNumber}&page_size=${pageSize}`);
        }
        if(ordering){
            return this.http.get<Object>(`${gamesListUrl}&ordering=${ordering}&page=${pageNumber}&page_size=${pageSize}`);
        }
        else {
            return this.http.get<Object>(`${gamesListUrl}&page=${pageNumber}&page_size=${pageSize}`);
        }
    }

    getById(id:number): Observable<Object> {
        return this.http.get(`${gameDetailsUrl}/${id}?key=${apiKey}`);
    }
}