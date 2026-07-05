import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7011/api/auth';

  login(username: string, password: string) {

    const body = {

        username,

        password

    };

    return this.http.post(

        `${this.apiUrl}/login`,

        body

    );

  }

  register(username: string, password: string){

    const body = {

        username,

        password

    };

    return this.http.post(

        `${this.apiUrl}/register`,

        body

    );

  }

  getMe() {

    const token = localStorage.getItem("token");

    const headers = new HttpHeaders({

        Authorization: `Bearer ${token}`

    });

    return this.http.get(

        `${this.apiUrl}/me`,

        {

            headers

        }

    );

}

}