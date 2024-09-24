import {Component, OnInit} from '@angular/core';
import {VeterinarianService} from "../../services/Veterinarian/veterinarian.service";
import {PetOwnerService} from "../../services/PetOwner/pet-owner.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent  implements OnInit{
profile:any;
isOwner:boolean =false;
isVet:boolean=false;
type: string = '';
constructor(private ownerService:PetOwnerService,private vetService:VeterinarianService,private router:Router) {
}

goBack(){
  this.router.navigate(['/login']);
}
ngOnInit(){
  localStorage.getItem('userType') === 'Owner' ? this.type = 'Owner' : this.type = 'Vet';
  if(this.type==='Owner'){
    this.isOwner = true;
    const ownerId = parseInt(localStorage.getItem('ownerId')!);
    this.ownerService.getOwner(ownerId).subscribe(
      (response:any)=>{
        this.profile = response;
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    )

  }
  if(this.type==='Vet'){
    this.isVet = true;
    const userId = parseInt(localStorage.getItem('userId')!);
    this.vetService.getVet(userId).subscribe(
      (response:any)=>{
        this.profile = response;
      },
      (error:any)=>{
        console.log(error);

      }
      )
  }
}


}
