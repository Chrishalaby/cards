import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

export interface Product {
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private readonly httpClient: HttpClient, private router: Router) { }
  ngOnInit() {
    this.httpClient.get<any>('assets/products.json').pipe(tap((products: any)=> {this.products = products.data;})).subscribe();
  }



  display: boolean = false;
  showDialog() {
      this.display = true;
  }

  premade(){
    this.router.navigate(['/premade']);
  }
}
