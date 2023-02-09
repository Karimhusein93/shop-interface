import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent} from '../../footer-content/about/about.component'
import { TermsComponent } from '../../footer-content/terms/terms.component';
import { PrivacyComponent } from '../../footer-content/privacy/privacy.component';
import { CookieComponent } from '../../footer-content/cookie/cookie.component';
import { ContactComponent } from '../../footer-content/contact/contact.component';
import { DeliveryComponent } from '../../footer-content/delivery/delivery.component';
import { ReturnComponent } from '../../footer-content/return/return.component';
import { AnpcComponent } from '../../footer-content/anpc/anpc.component';
import { AnpcSalComponent } from '../../footer-content/anpc-sal/anpc-sal.component';
import {FooterRoutingModule} from './footer-routing.module'


@NgModule({
  declarations: [
    AboutComponent,
    TermsComponent,
    PrivacyComponent,
    CookieComponent,
    ContactComponent,
    DeliveryComponent,
    ReturnComponent,
    AnpcComponent,
    AnpcSalComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ],
  exports: [
    AboutComponent,
    TermsComponent,
    PrivacyComponent,
    CookieComponent,
    ContactComponent,
    DeliveryComponent,
    ReturnComponent,
    AnpcComponent,
    AnpcSalComponent
  ]
})
export class FooterModule { }
