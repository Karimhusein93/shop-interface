import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../footer-content/about/about.component';
import { TermsComponent } from '../../footer-content/terms/terms.component';
import { PrivacyComponent } from '../../footer-content/privacy/privacy.component';
import { CookieComponent } from '../../footer-content/cookie/cookie.component';
import { ContactComponent } from '../../footer-content/contact/contact.component';
import { DeliveryComponent } from '../../footer-content/delivery/delivery.component';
import { ReturnComponent } from '../../footer-content/return/return.component';
import { FooterRoutingModule } from './footer-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AboutComponent,
    TermsComponent,
    PrivacyComponent,
    CookieComponent,
    ContactComponent,
    DeliveryComponent,
    ReturnComponent,
  ],
  imports: [CommonModule, FooterRoutingModule, MatIconModule, FormsModule, HttpClientModule],
  exports: [
    AboutComponent,
    TermsComponent,
    PrivacyComponent,
    CookieComponent,
    ContactComponent,
    DeliveryComponent,
    ReturnComponent,
  ],
})
export class FooterModule {}
