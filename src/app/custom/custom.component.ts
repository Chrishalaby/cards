import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs';

interface Metal {
  name: string,
  code: string
}
export interface Product{
  image: string;
  name: string;
  price: number;
}
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})

export class CustomComponent implements OnInit {
  products: Product[] = []
  uploadedFiles: any[] = [];
  metals: Metal[];
  val= 0;
  selectedMetal: Metal | undefined;

  constructor(
    private messageService: MessageService,
    private readonly httpClient: HttpClient
    ) {
      this.metals = [
          {name: '24K Gold', code: '24'},
          {name: 'Mirror Black', code: 'MB'},
          {name: 'Mirror Gold', code: 'MG'},
          {name: 'Mirror Rose Gold', code: 'MR'},
          {name: 'Mirror Silver', code: 'MS'}
      ];
  }

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  removebtn(){
    if (this.val > 0) {
      this.val--;
    }
  }
  addbtn(){
    this.val++;
  }

  onUpload(event: { files: any; }) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  ngOnInit(): void {
    this.httpClient.get<any>('assets/products.json').pipe(tap((products: any)=> {this.products = products.data;})).subscribe();
  }

}
