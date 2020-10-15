import { Http, HttpModule,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Album} from './album'
import { Observable } from 'rxjs';
import {Product} from './product'
@Injectable()
export class ProductService {
 private _albumUrl=  '../assets/album.json';
private _productsUrl ='../assets/products.json';

  constructor(private _http:Http) { }
 
  getAlbum(id:number): Observable<Album>{
    return this._http.get(this._albumUrl).map((response) =>  <Album>response.json());

  }

  getProducts() : Observable<Product[]>{
     return this._http.get(this._productsUrl).map((respond) => <Product[]> respond.json());
  } 
}
  