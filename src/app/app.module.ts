import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { HomeComponent } from './home/home.component';
import {GalleriaModule} from 'primeng/galleria';
import { FAQComponent } from './faq/faq.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PremadeComponent } from './premade/premade.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CustomComponent } from './custom/custom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'primeng/tooltip';
import {FileUploadModule} from 'primeng/fileupload';
import {MenubarModule} from 'primeng/menubar';
import { EndfileComponent } from './endfile/endfile.component';
import { TermsAndServicesComponent } from './terms-and-services/terms-and-services.component';
import { PrivacyAndPolicyComponent } from './privacy-and-policy/privacy-and-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FAQComponent,
    HowItWorksComponent,
    PremadeComponent,
    ContactUsComponent,
    CustomComponent,
    EndfileComponent,
    TermsAndServicesComponent,
    PrivacyAndPolicyComponent,
    RefundPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    GalleriaModule,
    HttpClientModule,
    DataViewModule,
    DropdownModule,
    ImageModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule,
    TooltipModule,
    FileUploadModule,
    MenubarModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
