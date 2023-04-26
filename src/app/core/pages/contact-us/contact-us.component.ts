import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  FormData!: FormGroup;
  constructor(private builder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Comment: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.FormData.valid) {
      this.router.navigate(['/success']);
    }
  }
}
