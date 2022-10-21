import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [
    {label: 'HOME', icon: 'pi pi-fw pi-home', routerLink: '/'},
    {label: 'FAQ', icon: 'pi pi-fw pi-question-circle', routerLink: 'faq'},
    {label: 'HOW IT WORKS', icon: 'pi pi-fw pi-cog', routerLink: 'how-it-works'},
    {label: 'PREMADE DESIGNS', icon: 'pi pi-fw pi-file'},
    {label: 'FULL CUSTOM CARD', icon: 'pi pi-fw pi-pencil'},
    {label: 'CONTACT US', icon: 'pi pi-fw pi-send'}
  ] ;
  activeItem= this.items[0];
  constructor(){}
  ngOnInit() {
    this.activeItem = this.items[0];
  }

}
