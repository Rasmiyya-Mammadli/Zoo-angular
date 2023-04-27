import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-donate-page',
  templateUrl: './success-donate-page.component.html',
  styleUrls: ['./success-donate-page.component.scss'],
})
export class SuccessDonatePageComponent {
  constructor(private router: Router) {}

  backToHome() {
    this.router.navigate(['/main']);
  }
}
