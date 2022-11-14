import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SunatService {

  constructor(
    private http: HttpClient
  ) { }
  buscarRuc(_ruc: string): Observable<any>{
    let data = {
      ruc: _ruc
    };

    let url = "https://www.softwarelion.xyz/api/sunat/consulta-ruc";
    let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNDkzLCJjb3JyZW8iOiJqZWFuY2FybG9zLnBhZGlsbGFAdmFsbGVncmFuZGUuZWR1LnBlIiwiaWF0IjoxNjY1NTA5MzM5fQ.IBJgp4VA_egRLeM6jfmw82aUzxsua93m7_viPYH51zE";
    let _headers = new HttpHeaders().set("Authorization", token);

    return this.http.post(url, data, {headers: _headers});
  }

}
