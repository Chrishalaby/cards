import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

export interface Product {
  image: string;
}
export interface ProductJson {
  products: Product[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private readonly httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get<ProductJson>('assets/products.json').pipe(tap((products: ProductJson)=> {this.products = products.products;})).subscribe();
      // this.photoService.getImages().then(images => this.images = images);
  }
}
