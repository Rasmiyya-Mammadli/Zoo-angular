import { Component } from '@angular/core';

interface Animal {
  name: string;
  country: string;
  src: string;
}

@Component({
  selector: 'app-pet-slider',
  templateUrl: './pet-slider.component.html',
  styleUrls: ['./pet-slider.component.scss'],
})
export class PetSliderComponent {
  animals: Animal[] = [
    {
      name: 'Giant Pandas',
      country: 'Native to Southwest China',
      src: '../../../../../assets/main-assets/Rectangle 5 (6).png',
    },
    {
      name: 'Eagles',
      country: 'Native to South America',
      src: '../../../../../assets/main-assets/Rectangle 5 (7).png',
    },
    {
      name: 'Gorillas',
      country: 'Native to Congo',
      src: '../../../../../assets/main-assets/Rectangle 5 (8).png',
    },
    {
      name: 'Two-toed Sloth',
      country: 'Mesoamerica, South America',
      src: '../../../../../assets/main-assets/Rectangle 5 (9).png',
    },
    {
      name: 'cheetahs',
      country: 'Native to Africa',
      src: '../../../../../assets/main-assets/Rectangle 5 (10).png',
    },
    {
      name: 'Penguins',
      country: 'Native to Antarctica',
      src: '../../../../../assets/main-assets/Rectangle 5 (11).png',
    },
  ];

  shuffleArray(array: Animal[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
