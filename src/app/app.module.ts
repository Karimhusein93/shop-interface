import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryModule } from './summary-page/summary.module';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SummaryModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
