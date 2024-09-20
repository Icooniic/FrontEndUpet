import {Component, OnInit} from '@angular/core';
import {PetService} from "../../services/Pet/pet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrl: './my-pets.component.css'
})
export class MyPetsComponent implements OnInit{
  searchText: any;
  pets: any;
  allPets: any[] = [];
  constructor(private petService: PetService, private router:Router){
  }

ngOnInit() {
    const ownerId= parseInt(localStorage.getItem('ownerId')!)
    this.petService.getPets(ownerId).subscribe(
      (data:any)=>{
        this.pets= data;
        this.allPets = data;

      },
      (error:any)=>{
        console.log(error)
      }
    )

}

  petDetails(pet: any) {
    this.router.navigate(['/pet-detail'], { state: { pet } });

  }

  searchPet() {
    this.pets = this.allPets.filter(vet =>
      vet.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
