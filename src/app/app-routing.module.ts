import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponentComponent } from './page/page-component/contact-component/contact-component.component';
import { ProductComponentComponent } from './page/page-component/product-component/product-component.component';
import { CartComponentComponent } from './page/page-component/cart-component/cart-component.component';
import { HomeComponentComponent } from './page/page-component/home-component/home-component.component';
import { PageComponentComponent } from './page/page-component/page-component.component';

//Khai báo một constant chứa các route của app
const routes: Routes = [
  // { path: '', component: PageComponentComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'product', component: ProductComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'cart', component: CartComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
