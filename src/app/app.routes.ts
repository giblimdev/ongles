import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
export const routes: Routes = [
   { path: 'products/1', component: ProductDetailComponent},
   { path: 'login', component: LoginComponent}, 
   { path: 'cart', component: CartComponent},
   { path: 'order', component: OrderComponent},
   {path: '', component: HomeComponent}

];
