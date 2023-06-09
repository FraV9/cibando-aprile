import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {

  loginError: string;
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    ) {}

  onSubmit(credentials: any) {
    if(credentials.email != '' && credentials.password != '') {
      this.authService.login(credentials.email, credentials.password).subscribe({
        next: (res) => {
          this.user = res;
          if(res) {
            this.authService.saveStorage(res);
            this.messageService.add({severity: 'succes', summary: 'Successo!', detail: 'il login è andato a buon fine', life: 3000});

            setTimeout(() => this.router.navigate(['home']), 3000);

          } else {
            this.loginError = 'email o password non validi';
            this.messageService.add({severity: 'error', summary: 'Errore!', detail: 'il login non è andato a buon fine', life: 3000});
          }
        },
        error: (err) => {
          console.log(err);
          this.loginError = 'email o password errati';
          this.messageService.add({severity: 'error', summary: 'Errore!', detail: 'il login non è andato a buon fine', life: 3000});
        }
      })
    }
  }
}
