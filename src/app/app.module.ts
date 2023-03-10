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
import {DropdownModule} from 'primeng/dropdown';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { GalleryModule } from  'ng-gallery';

import { GALLERY_CONFIG } from 'ng-gallery';

// pipe
import { CurrencySuffixPipe } from './pipe/currency.pipe';
// componenent
import { HeaderComponentComponent } from './page/page-component/header-component/header-component.component';
import { PageComponentComponent } from './page/page-component/page-component.component';
import { ContactComponentComponent } from './page/page-component/contact-component/contact-component.component';
import { ProductComponentComponent } from './page/page-component/product-component/product-component.component';
import { HomeComponentComponent } from './page/page-component/home-component/home-component.component';
import { FlashSaleComponentComponent } from './page/page-component/home-component/flash-sale-component/flash-sale-component.component';
import { TrendingComponentComponent } from './page/page-component/home-component/trending-component/trending-component.component';
import { FooterComponentComponent } from './page/page-component/home-component/footer-component/footer-component.component';
import { CartComponentComponent } from './page/page-component/cart-component/cart-component.component';
import { FancyComponentComponent } from './page/page-component/fancy-component/fancy-component.component';
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
    FooterComponentComponent,
    CartComponentComponent,
    CurrencySuffixPipe,
    FancyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    BreadcrumbModule,
    DropdownModule,
    SidebarModule,
    ButtonModule,
    GalleryModule
  ],
  providers: [{
    provide: GALLERY_CONFIG,
    useValue: {
      dots: true,
      imageSize: 'cover'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
