import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MedicalService} from "../../services/medical/medical.service";
import {state} from "@angular/animations";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.css'
})
export class PetDetailComponent implements OnInit{
  medicalId:any;
  vaccines:any;
  surgeries:any;
  type:any;
  diseases:any;
  pet:any;
  constructor(private router:ActivatedRoute,private route:Router, private medicalService:MedicalService){

  }
  ngOnInit(){
    this.pet = history.state.pet;
    const id = parseInt(this.pet.id);
    this.medicalService.getMedicalHistory(id).subscribe(
      (data:any)=>{
        this.medicalId = data.id;
        this.medicalService.getDiseases(this.medicalId).subscribe(
          (data:any)=>{
            this.diseases = data;
            console.log(data)
          },
          error => {
            console.log(error);
          }
        )
        this.medicalService.getSurgeries(this.medicalId).subscribe(
          (data:any)=>{
            this.surgeries = data;
          },
          error => {
            console.log(error);
          }
        )
        this.medicalService.getVaccines(this.medicalId).subscribe(
          (data:any)=>{
            this.vaccines = data;
          },
          error => {
            console.log(error);
          }
          )

      },
      error => {
        console.log(error);
      }
    )

  }

  goBack() {
    this.route.navigate(['/pets']);
  }
  addHistory(type:string ){
    this.pet = history.state.pet;
    this.pet ={...this.pet, medical:type};
    this.route.navigate(['/add-history'],{state:{pet:this.pet}});
  }
}
