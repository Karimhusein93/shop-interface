import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SearchProductsComponent } from '../shared/search-products/search-products.component';
import { CartComponent } from '../shared/cart/cart.component';
import { CategoriesBarComponent } from '../shared/categories-bar/categories-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button'
import { SummaryContentComponent} from '../summary-content/summary-content.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    SearchProductsComponent,
    CartComponent,
    CategoriesBarComponent,
    SummaryContentComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SearchProductsComponent,
    CartComponent,
    CategoriesBarComponent,
    SummaryContentComponent
  ]
})
export class SummaryModule { }
