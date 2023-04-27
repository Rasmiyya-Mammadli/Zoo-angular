import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PandaSectionComponent } from './pages/main/panda-section/panda-section.component';
import { HatSectionComponent } from './pages/main/hat-section/hat-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PetSectionComponent } from './pages/main/pet-section/pet-section.component';
import { TestimonialComponent } from './pages/main/testimonial/testimonial.component';
import { FeedSectionComponent } from './pages/main/feed-section/feed-section.component';
import { MainComponent } from './pages/main/main/main.component';
import { DonateComponent } from './pages/donate-page/donate/donate.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SliderModule } from './carousel/slider.module';
import { SuccessPageComponent } from './pages/success-page/success-page.component';
import { SuccessDonatePageComponent } from './pages/success-donate-page/success-donate-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    PandaSectionComponent,
    HatSectionComponent,
    MainComponent,
    PetSectionComponent,
    TestimonialComponent,
    FeedSectionComponent,
    DonateComponent,
    ContactUsComponent,
    SuccessPageComponent,
    HeaderComponent,
    FooterComponent,
    SuccessDonatePageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    SliderModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [MainComponent, HeaderComponent, FooterComponent],
})
export class CoreModule {}
