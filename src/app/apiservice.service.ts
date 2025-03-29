import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
//created object of htttp client
  constructor(private http:HttpClient) {

  }
  getproduct(){
    return this.http.get('https://fakestoreapi.com/products')
  }

   getProductById(id:string)
   {
     return this.http.get(`https://fakestoreapi.com/products/${id}`)
}
}