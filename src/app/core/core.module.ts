import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PandaSectionComponent } from './pages/main/panda-section/panda-section.component';
import { HatSectionComponent } from './pages/main/hat-section/hat-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';

import { PetSectionComponent } from './pages/main/pet-section/pet-section.component';
import { TestimonialComponent } from './pages/main/testimonial/testimonial.component';
import { FeedSectionComponent } from './pages/main/feed-section/feed-section.component';
import { MainComponent } from './pages/main/main/main.component';
import { DonateComponent } from './pages/donate-page/donate/donate.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SliderModule } from './carousel/slider.module';
import { SuccessPageComponent } from './pages/success-page/success-page.component';

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
  ],
  imports: [CommonModule, SliderModule, FormsModule, ReactiveFormsModule],
  exports: [MainComponent, HeaderComponent, FooterComponent],
})
export class CoreModule {}
