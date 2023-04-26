import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { PetSliderComponent } from './pet-slider/pet-slider.component';
import { ReviewSliderComponent } from './review-slider/review-slider.component';

@NgModule({
  declarations: [PetSliderComponent, ReviewSliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  exports: [PetSliderComponent, ReviewSliderComponent],
})
export class SliderModule {}
