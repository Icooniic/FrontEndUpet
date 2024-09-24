import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PetOwnerService} from "../../services/PetOwner/pet-owner.service";
import {VeterinarianService} from "../../services/Veterinarian/veterinarian.service";

@Component({
  selector: 'app-my-subscription',
  templateUrl: './my-subscription.component.html',
  styleUrl: './my-subscription.component.css'
})
export class MySubscriptionComponent implements OnInit{
  constructor(private ownerService:PetOwnerService,private vetSerivce:VeterinarianService) {
  }

  selectedPlan: any
  ngOnInit(): void {
    const type=localStorage.getItem('userType')
    if(type==='Owner'){
      this.ownerService.getOwner(parseInt(localStorage.getItem('userId')!)).subscribe(
        (data:any)=>{
          console.log(data)
          this.selectedPlan=data.subscriptionType;

        },
        (error:any)=>{
          console.log(error)
        }
      )
    }
    if(type==='Vet'){
      this.vetSerivce.getVet(parseInt(localStorage.getItem('userId')!)).subscribe(
        (data:any)=>{
          this.selectedPlan=data.subscriptionType;
          console.log(data)
        },
        (error:any)=>{
          console.log(error)
        }
      )
    }
  }

}
