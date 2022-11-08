import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomComponent } from './custom/custom.component';
import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PremadeComponent } from './premade/premade.component';
import { PrivacyAndPolicyComponent } from './privacy-and-policy/privacy-and-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { TermsAndServicesComponent } from './terms-and-services/terms-and-services.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'faq',
    component: FAQComponent
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent
  },
  {
    path: 'premade',
    component: PremadeComponent
  },
  {
    path: 'custom',
    component: CustomComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'terms-and-services',
    component: TermsAndServicesComponent
  },
  {
    path: 'privacy-and-policy',
    component: PrivacyAndPolicyComponent
  },
  {
    path: 'refund-policy',
    component: RefundPolicyComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
