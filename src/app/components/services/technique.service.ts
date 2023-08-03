import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Techniques } from 'src/app/models/techniques';

@Injectable({
  providedIn: 'root'
})
export class TechniqueService {
 

  constructor(private http: HttpClient) { }

  getTechnoiques(): Observable<Techniques[]> {
    return this.http.get<Techniques[]>('http://localhost:3000/techniques');
  }
 
  }

