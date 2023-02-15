import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryPageComponent } from './summary-page/summary-page.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryPageComponent,
  },
  {
    path: 'page',
    loadChildren: () =>
      import('./shared/footer/footer.module').then((m) => m.FooterModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./summary-page/summary.module').then((m) => m.SummaryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
