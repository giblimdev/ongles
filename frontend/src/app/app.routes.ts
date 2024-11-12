import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
export const routes: Routes = [
   { path: 'products/1', component: ProductDetailComponent},
   { path: 'login', component: LoginComponent}, 
   { path: 'cart', component: CartComponent},
   { path: 'order', component: OrderComponent},
   {path: '', component: HomeComponent}

];
