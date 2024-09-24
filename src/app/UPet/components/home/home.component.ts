import {Component, OnInit} from '@angular/core';
import {PetOwnerService} from "../../services/PetOwner/pet-owner.service";
import {VeterinarianService} from "../../services/Veterinarian/veterinarian.service";
import {PetService} from "../../services/Pet/pet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isOwner:boolean =false
  isVet:boolean=false
  pets:any[] = []
  image:string =''
  name:string = ''
  constructor(private ownerService: PetOwnerService,private vetService:VeterinarianService,private petService: PetService,private router:Router) {
  }
  ngOnInit() {
    const userId = parseInt(localStorage.getItem('userId')!);
    localStorage.getItem('userType') === 'Owner' ? this.isOwner = true : this.isVet = true;

    if(this.isOwner){
      this.ownerService.getOwner(userId).subscribe((response:any )=>{
        this.name = response.name;
        this.image = response.image_url;
      })
      this.petService.getPets(userId).subscribe((response:any)=>{
        console.log(response)
        this.pets = response
      })

    }
    if(this.isVet){
      this.vetService.getVet(userId).subscribe((response:any )=>{
        this.name = response.name;
        this.image = response.image_url;
      })


    }

  }

}
