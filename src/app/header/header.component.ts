import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [
    {label: 'HOME', icon: 'pi pi-fw pi-home', routerLink: 'home'},
    {label: 'FAQ', icon: 'pi pi-fw pi-question-circle', routerLink: 'faq'},
    {label: 'HOW IT WORKS', icon: 'pi pi-fw pi-cog', routerLink: 'how-it-works'},
    {label: 'PREMADE DESIGNS', icon: 'pi pi-fw pi-file', routerLink: 'premade'},
    {label: 'FULL CUSTOM CARD', icon: 'pi pi-fw pi-pencil', routerLink: 'custom'},
    {label: 'CONTACT US', icon: 'pi pi-fw pi-send', routerLink: 'contact-us'}
  ] ;

  constructor(){}
  ngOnInit() {

  }

}
