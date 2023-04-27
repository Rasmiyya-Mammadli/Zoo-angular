import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/pages/main/main/main.component';
import { DonateComponent } from './core/pages/donate-page/donate/donate.component';
import { ContactUsComponent } from './core/pages/contact-us/contact-us.component';
import { SuccessPageComponent } from './core/pages/success-page/success-page.component';
import { SuccessDonatePageComponent } from './core/pages/success-donate-page/success-donate-page.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: 'success-donate', component: SuccessDonatePageComponent },
  { path: 'not-found-page', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
