import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './UPet/components/login/login.component';
import { SignUpComponent } from './UPet/components/sign-up/sign-up.component';
import {MatFormField} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import { AddPetComponent } from './UPet/components/add-pet/add-pet.component';
import { ToolbarComponent } from './UPet/components/toolbar/toolbar.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import { HomeComponent } from './UPet/components/home/home.component';
import { ProfileComponent } from './UPet/components/profile/profile.component';
import { SubscriptionComponent } from './UPet/components/subscription/subscription.component';
import { VetsComponent } from './UPet/components/vets/vets.component';
import { MyPetsComponent } from './UPet/components/my-pets/my-pets.component';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import { VetProfileComponent } from './UPet/components/vet-profile/vet-profile.component';
import { MySubscriptionComponent } from './UPet/components/my-subscription/my-subscription.component';
import { PetDetailComponent } from './UPet/components/pet-detail/pet-detail.component';
import { AddHistoryComponent } from './UPet/components/add-history/add-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AddPetComponent,
    ToolbarComponent,
    HomeComponent,
    ProfileComponent,
    SubscriptionComponent,
    VetsComponent,
    MyPetsComponent,
    VetProfileComponent,
    MySubscriptionComponent,
    PetDetailComponent,
    AddHistoryComponent,

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
    MatIconButton,
    FormsModule,
    MatCardActions,
    MatCardHeader,
    MatCardContent,
    MatCard,
    MatCardTitle
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
