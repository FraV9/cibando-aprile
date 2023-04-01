import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form = new FormGroup({
    name:           new FormControl('', Validators.required),
    email:          new FormControl('', [Validators.required, Validators.email]),
    password:       new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto:        new FormControl('', Validators.requiredTrue),
  })

  onSubmit() {
    console.log(this.form.value);
  }

}
