import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../../footer-content/about/about.component';
import { AnpcComponent } from '../../footer-content/anpc/anpc.component';
import { ContactComponent } from '../../footer-content/contact/contact.component';
import { CookieComponent } from '../../footer-content/cookie/cookie.component';
import { DeliveryComponent } from '../../footer-content/delivery/delivery.component';
import { PrivacyComponent } from '../../footer-content/privacy/privacy.component';
import { ReturnComponent } from '../../footer-content/return/return.component';
import { TermsComponent } from '../../footer-content/terms/terms.component';

const routes: Routes = [ 

{ path: 'about-us', component: AboutComponent },
{ path: 'terms-and-conditions', component: TermsComponent},
{ path: 'privacy-policy', component: PrivacyComponent},
{ path: 'cookie-policy', component: CookieComponent },
{ path: 'contact-us', component: ContactComponent },
{ path: 'delivery-and-shipping', component: DeliveryComponent },
{ path: 'returns-policy', component: ReturnComponent },
{ path: 'anpc', component: AnpcComponent },
{ path: 'anpc-sal', component: AnpcComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule { }
