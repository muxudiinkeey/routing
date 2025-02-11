import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {  inject} from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  // private http = inject (HttpClient)
}
