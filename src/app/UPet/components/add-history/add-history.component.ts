import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PetService} from "../../services/Pet/pet.service";
import {MedicalService} from "../../services/medical/medical.service";

@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrl: './add-history.component.css'
})
export class AddHistoryComponent implements OnInit {
  pet :any;
  selectedType:any;
  addHistoryForm: any;
  idMedical: any;
  constructor(private fb:FormBuilder, private medicalService:MedicalService,private router:Router) {
    this.addHistoryForm = this.fb.group({
      vaccines:this.fb.group({
        name:[''],
        date:[''],
        type:[''],
        dose:[''],
        location:[''],
      }),
      surgeries:this.fb.group({
        date:[''],
        description:[''],
      }),
      diseases:this.fb.group({
        date:[''],
        name:[''],
        /*severity : Mild*/

      })
    })
  }
  ngOnInit() {
    this.pet = history.state.pet
    this.selectedType= this.pet.medical
  }

  onSubmit() {
    this.pet = history.state.pet
    const id = this.pet.id
    console.log(this.pet);
    this.medicalService.getMedicalHistory(id).subscribe((data:any) => {
      this.idMedical = parseInt(data.id)
      if(this.pet.medical==='vaccines'){
        const vaccines ={
          name:this.addHistoryForm.value.vaccines.name,
          vaccineDate:this.addHistoryForm.value.vaccines.date,
          vaccineType:this.addHistoryForm.value.vaccines.type,
          dose:this.addHistoryForm.value.vaccines.dose,
          location:this.addHistoryForm.value.vaccines.location,
          medicalHistoryId:this.idMedical
        }
        this.medicalService.createVaccine(vaccines, this.idMedical).subscribe((data:any) => {
          this.router.navigate(['/pet-detail'], { state: { pet:this.pet } });

        })
      }
      if(this.pet.medical==='surgeries'){
        const surgeries ={
          surgeryDate:this.addHistoryForm.value.surgeries.date,
          description:this.addHistoryForm.value.surgeries.description,
          medicalHistoryId:this.idMedical

        }
        this.medicalService.createSurgeries(surgeries, this.idMedical).subscribe((data:any) => {
          console.log(data)
          this.router.navigate(['/pet-detail'], { state: { pet:this.pet } });
        })

      }
      if(this.pet.medical==='diseases'){
        const diseases ={
          diagnosisDate:this.addHistoryForm.value.diseases.date,
          name:this.addHistoryForm.value.diseases.name,
          medicalHistoryId:this.idMedical,
          severity:"Mild"
        }
        console.log(diseases)
        this.medicalService.createDisease(diseases, this.idMedical).subscribe((data:any) => {

          console.log(data)
          this.router.navigate(['/pet-detail'], { state: { pet:this.pet } });
        })

      }
    })


  }
  back(){
    this.pet = history.state.pet
    console.log(this.pet)
    this.router.navigate(['/pet-detail'], { state: { pet:this.pet } });
  }


}

