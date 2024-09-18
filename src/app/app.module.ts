import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './UPet/components/login/login.component';
import { SignUpComponent } from './UPet/components/sign-up/sign-up.component';
import {MatFormField} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import { HomeOwnerComponent } from './UPet/components/home-owner/home-owner.component';
import { HomeVetComponent } from './UPet/components/home-vet/home-vet.component';
import { AddPetComponent } from './UPet/components/add-pet/add-pet.component';
import { ToolbarComponent } from './UPet/components/toolbar/toolbar.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeOwnerComponent,
    HomeVetComponent,
    AddPetComponent,
    ToolbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormField,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatButton,
    MatInputModule,
    MatToolbar,
    MatIcon,
    MatIconButton
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
