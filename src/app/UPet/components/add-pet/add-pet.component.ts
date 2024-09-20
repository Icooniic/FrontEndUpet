import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {PetService} from "../../services/Pet/pet.service";

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrl: './add-pet.component.css'
})
export class AddPetComponent implements OnInit{
  successMessage: boolean = false;
  errorMessage: boolean = false;
  createPetForm: any;
  constructor(private fb: FormBuilder, private router:Router,private petService:PetService) {
  }
  ngOnInit() {
    this.createPetForm = this.fb.group({
      name:[''],
      species:[''],
      breed:[''],
      weight:[0],
      birthdate:[''],
      gender:[''],
      image_url:['']
    })
  }
  createPet() {
    const id = parseInt(localStorage.getItem('ownerId')!);
    const data={
      name: this.createPetForm.get('name')?.value,
      gender: this.createPetForm.get('gender')?.value,
      image_url:this.createPetForm.get('image_url')?.value,
      species: this.createPetForm.get('species')?.value,
      breed: this.createPetForm.get('breed')?.value,
      weight: parseInt(this.createPetForm.get('weight')?.value),
      birthdate: this.createPetForm.get('birthdate')?.value
    }
    console.log(data);
    this.petService.createPet(data,id).subscribe(
      data=>{
        this.successMessage = true;
        this.errorMessage = false;
        this.router.navigate(['/home']);
      },
      error=>{
        this.successMessage = false;
        this.errorMessage = true;
      }
    )
  }
}
