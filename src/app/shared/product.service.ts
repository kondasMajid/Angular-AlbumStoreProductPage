import { Http, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
 _albumUrl= '../assets/album.json';
 
  constructor(private _http:Http) { }
 
}
