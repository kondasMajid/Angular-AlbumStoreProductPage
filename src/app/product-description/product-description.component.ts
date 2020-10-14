import { Album } from './../album';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
//  import {Album}
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;
  constructor(private _productService : ProductService) { }

  ngOnInit() {
     this._productService.getAlbum(1).subscribe(res => this.albumInfo = res)
    // console.log(this.albumInfo.album.name,'jkjk')
  }

}
