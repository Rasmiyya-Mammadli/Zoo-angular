import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {
  ngOnInit() {
    const inputField = document.querySelector(
      '.input-field'
    ) as HTMLInputElement;
    inputField.value = '100';

    const radios = document.querySelectorAll('.inside-scale div');
    const radArr = Array.from(radios) as HTMLDivElement[];
    let isClicked = false;
    const dflt = document.querySelector('.dflt') as HTMLDivElement;
  

    radArr.forEach(rad => {
      rad.addEventListener('click', (e: MouseEvent) => {
        radArr.forEach(rad => rad.classList.remove('clicked'));

        (e.target as HTMLDivElement).classList.add('clicked');
        radArr.forEach(rad => {
          rad.classList.remove('click-inside');
        });
        if ((e.target as HTMLDivElement).classList.contains('dflt')) {
        } else {
          dflt.classList.remove('dflt');
        }

        inputField.value =
          (e.target as HTMLDivElement).getAttribute('data-value') || '';
        isClicked = !isClicked;
        isClicked
          ? (e.target as HTMLDivElement).classList.add('click-inside')
          : (e.target as HTMLDivElement).classList.remove('click-inside');
      });
    });

    inputField.addEventListener('keyup', e => {
      radArr.forEach((rad: HTMLDivElement) => {
        if (
          rad.getAttribute('data-value') == (e.target as HTMLInputElement).value
        ) {
          rad.classList.add('click-inside');
          rad.classList.add('clicked');
        } else {
          rad.classList.remove('click-inside');
          rad.classList.remove('clicked');
        }
      });
    });
  }
}
