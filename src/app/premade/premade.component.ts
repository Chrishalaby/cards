import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { debounceTime, tap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';

export interface Product {
  image: string;
  name: string;
  // description: string;
  price: number;
  // inventoryStatus: string;
  // category: string;
  // rating: number;
  // color: string;
}

@Component({
  selector: 'app-premade',
  templateUrl: './premade.component.html',
  styleUrls: ['./premade.component.scss']
})

export class PremadeComponent implements OnInit {
  products: Product[] = []
  sortOrder: number = 0;
  sortField: string = '';

  formGroup: FormGroup = this.formBuilder.group({
    search: [],
    // sort: this.formBuilder.group({
    //   sortField: [''],
    //   sortOrder: [''],
    //   sortDirection: [''],
    // })
    sort: [],
  })

  @ViewChild('dv') dataView!: DataView;
  constructor(private readonly httpClient: HttpClient,
    private readonly formBuilder: FormBuilder,
    private filterService: FilterService,
    ){}

  ngOnInit() {
    this.httpClient.get<any>('assets/products.json').pipe(tap((products: any)=> {this.products = products.data;})).subscribe();
    this.formGroup.get('search')?.valueChanges.pipe(debounceTime(300)).subscribe((e)=>{this.dataView.filter(e);});

  }


}
