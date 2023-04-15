import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from "@angular/common/http";
import { MaterialExampleModule } from "src/material.module";
import { UserRoutingModule } from "./user-routing.module";

import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CKEditorModule,
    HttpClientModule,
    MaterialExampleModule,
    UserRoutingModule,
    PasswordModule,
    DividerModule
  ],
  exports: []
})

export class UserModule {}
