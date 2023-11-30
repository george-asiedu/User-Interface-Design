import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor() { }

  submitForm(name: string, password: string, email: string) {
    console.log(name, password, email)
  }

  loginForm(email: string, password: string) {
    console.log(email, password)
  }
}
