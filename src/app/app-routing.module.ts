import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'faq',
    component: FAQComponent
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
