import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../customValidator';

import { PrimeNGConfig } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  newUser: any;

  constructor(private config: PrimeNGConfig,
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal
    ) {}

  form = new FormGroup({
    name:           new FormControl('', Validators.required),
    email:          new FormControl('', [Validators.required, Validators.email]),
    password:       new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto:        new FormControl('', Validators.requiredTrue),
  },
    [CustomValidator.MatchValidator('password', 'ripetiPassword')]
  )

  onSubmit() {
    // console.log(this.form.value);
    const userHome = {
      name: this.form.value.name,
      email: this.form.value.email
    }

    const user = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.userService.addUser(user).pipe(take(1)).subscribe({
      next: (res) => {
        console.log(res);
        this.newUser = res;
      },
      error: (error) => {
        console.log(error)
      }
    })

    this.userService.datiUtente.next(userHome);

    // this.router.navigate(['home']);
  }

  openModal(content: any, titolo?: string) {
    let title = titolo;

    this.modalService.open(content, { ariaLabelledBy: 'modale servizi', size: 'lg', centered: true}).result.then((res) => {
      console.log('azione da eseguire' + titolo)
    }).catch((res) => {
      console.log('nessuna azione da eseguire')
    });
  }

}
