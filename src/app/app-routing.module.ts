import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./UPet/components/login/login.component";
import {SignUpComponent} from "./UPet/components/sign-up/sign-up.component";
import {HomeComponent} from "./UPet/components/home/home.component";
import {AddPetComponent} from "./UPet/components/add-pet/add-pet.component";
import {VetsComponent} from "./UPet/components/vets/vets.component";
import {SubscriptionComponent} from "./UPet/components/subscription/subscription.component";
import {ProfileComponent} from "./UPet/components/profile/profile.component";
import {VetProfileComponent} from "./UPet/components/vet-profile/vet-profile.component";
import {MySubscriptionComponent} from "./UPet/components/my-subscription/my-subscription.component";
import {MyPetsComponent} from "./UPet/components/my-pets/my-pets.component";
import {PetDetailComponent} from "./UPet/components/pet-detail/pet-detail.component";

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent },
  {path:'register',component: SignUpComponent},
  {path:'home',component:HomeComponent},
  {path:'add-pet',component: AddPetComponent},
  {path:'vets',component:VetsComponent},
  {path:'subscription',component:SubscriptionComponent},
  {path:'profile',component:ProfileComponent},
  {path:'vet-detail',component:VetProfileComponent},
  {path:'my-subscription',component:MySubscriptionComponent},
  {path:'pets',component:MyPetsComponent},
  {path:'pet-detail',component:PetDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
