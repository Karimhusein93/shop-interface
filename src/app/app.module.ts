import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryModule } from './summary-page/summary.module';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterModule } from './shared/footer/footer.module';
import { RouterModule } from '@angular/router';
import { LoginComponent} from './shared/login/login.component'
import { FooterComponent } from './shared/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    SummaryPageComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SummaryModule,
    FooterModule,
    NgbModule,
    RouterModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
