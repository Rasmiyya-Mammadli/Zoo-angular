import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-review-slider',
  templateUrl: './review-slider.component.html',
  styleUrls: ['./review-slider.component.scss'],
})
export class ReviewSliderComponent implements AfterViewInit {
  isDarkenedAreaVisible1 = false;
  isDarkenedAreaVisible2 = false;
  isDarkenedAreaVisible3 = false;

  @ViewChild('rangeInput') rangeInput!: ElementRef<HTMLInputElement>;
  @ViewChild('reviews') reviews!: ElementRef<HTMLDivElement>;
  rangeCount = 1;

  ngAfterViewInit(): void {
    this.rangeInput.nativeElement.addEventListener('input', () => {
      this.reviews.nativeElement
        .querySelectorAll('.testimonial__item')
        .forEach((review: Element) => {
          review.classList.remove('dark');
        });

      const range = parseInt(this.rangeInput.nativeElement.value);

      this.reviews.nativeElement
        .querySelectorAll('.testimonial__item')
        .forEach((review: Element, index: number) => {
          if (index < range - 1) {
            review.classList.add('dark');
          } else {
            review.classList.remove('fade');
            review.clientWidth;
            review.classList.add('fade');
            review.addEventListener('animationend', () => {
              review.classList.remove('fade');
            });
          }
        });
    });
  }

  toggleDarkenedArea_1() {
    this.isDarkenedAreaVisible1 = true;
  }
  closeDarkenedArea1() {
    this.isDarkenedAreaVisible1 = false;
  }

  toggleDarkenedArea_2() {
    this.isDarkenedAreaVisible2 = true;
  }
  closeDarkenedArea2() {
    this.isDarkenedAreaVisible2 = false;
  }

  toggleDarkenedArea_3() {
    this.isDarkenedAreaVisible3 = true;
  }
  closeDarkenedArea3() {
    this.isDarkenedAreaVisible3 = false;
  }
}
