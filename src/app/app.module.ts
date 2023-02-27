import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// lib
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {BreadcrumbModule} from 'primeng/breadcrumb';

// componenent
import { HeaderComponentComponent } from './page/page-component/header-component/header-component.component';
import { PageComponentComponent } from './page/page-component/page-component.component';
import { ContactComponentComponent } from './page/page-component/contact-component/contact-component.component';
import { ProductComponentComponent } from './page/page-component/product-component/product-component.component';
import { HomeComponentComponent } from './page/page-component/home-component/home-component.component';
import { FlashSaleComponentComponent } from './page/page-component/home-component/flash-sale-component/flash-sale-component.component';
import { TrendingComponentComponent } from './page/page-component/home-component/trending-component/trending-component.component';
import { FooterComponentComponent } from './page/page-component/home-component/footer-component/footer-component.component';
// service
import { NavigationService } from './service/navigation-service.service';
import { TrendingService } from './service/trending-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent, 
    PageComponentComponent,
    ContactComponentComponent,
    ProductComponentComponent,
    HomeComponentComponent,
    FlashSaleComponentComponent,
    TrendingComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
