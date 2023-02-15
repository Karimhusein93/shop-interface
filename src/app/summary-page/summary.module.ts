import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SearchProductsComponent } from '../shared/search-products/search-products.component';
import { CartComponent } from '../shared/cart/cart.component';
import { CategoriesBarComponent } from '../shared/categories-bar/categories-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button'
import { SummaryContentComponent} from '../summary-content/summary-content.component'
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { SummaryRoutingModule } from './summary-routing.module';


@NgModule({
  declarations: [
    NavbarComponent,
    SearchProductsComponent,
    CartComponent,
    CategoriesBarComponent,
    SummaryContentComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    SummaryRoutingModule
  ],
  exports: [
    NavbarComponent,
    SearchProductsComponent,
    CartComponent,
    CategoriesBarComponent,
    SummaryContentComponent,
    ProductComponent
  ]
})
export class SummaryModule { }
