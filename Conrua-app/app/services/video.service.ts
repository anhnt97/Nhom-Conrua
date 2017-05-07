import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';


@Injectable()
export class VideoService {
    private dataUrl = "http://58fce0a88c2a4100111e1289.mockapi.io/videos/"

    constructor(private http: Http) {}

    GetList(): Observable<any[]> {
        return this.http.get(this.dataUrl).map((response: Response) => response.json())
    }
    GetSingle(id: number): Observable<any> {
        return this.http.get(this.dataUrl + id).map((response: Response) => response.json())
    }
    
    
}