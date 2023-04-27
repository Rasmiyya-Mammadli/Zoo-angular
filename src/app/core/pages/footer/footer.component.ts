import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  Form!: FormGroup;

  constructor(private builder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.Form = this.builder.group({
      Email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.Form.valid) {
      this.router.navigate(['/success']);
    }
  }
}
