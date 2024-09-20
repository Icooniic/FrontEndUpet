import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../services/authService/auth-service.service";
import {Router} from "@angular/router";
import {PetOwnerService} from "../../services/PetOwner/pet-owner.service";
import {VeterinarianService} from "../../services/Veterinarian/veterinarian.service";
import {VeterinaryService} from "../../services/Veterinary/veterinary.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  registerForm!:FormGroup;
  isOwner: boolean = true;
  isVet: boolean = false;
  constructor(private fb: FormBuilder, private router: Router,private authService: AuthServiceService,private ownerService:PetOwnerService,private vetService:VeterinarianService,private veterinaryService:VeterinaryService) {}

  ngOnInit():void  {
    this.registerForm = this.fb.group({
      name:[''],
      email: [''],
      password: [''],
      phone: [''],
      address: [''],
      userType: ['Owner'],
      numberPhone: [''],
      location:[''],
      clinicName:[''],
      locationClinic:[''],
      descriptionClinic:[''],
      office_hours_start:['09:00:00'],
      office_hours_end:['17:00:00'],
      phoneClinic:[''],
    });
  }
  register(): void {

    let user_type: string;
    this.isOwner ? user_type = 'Owner' : user_type = 'Vet';
        const registerData ={
          name: this.registerForm.get('name')?.value,
          email: this.registerForm.get('email')?.value,
          password: this.registerForm.get('password')?.value,
          userType: user_type
        };
        const emailData={
          email: this.registerForm.get('email')?.value
        }
        this.authService.signUp(registerData).subscribe(
          response => {
            this.authService.getUser(emailData).subscribe(
              (response:any)=>{
                localStorage.setItem('userId',response.id)
                const userId= response.id;
                if(this.isOwner){
                  const OwnerData ={
                    numberPhone: (this.registerForm.get('numberPhone')?.value).toString(),
                    location: this.registerForm.get('address')?.value,
                  };

                  this.ownerService.signUp(OwnerData,userId).subscribe(
                    (response:any) => {
                      console.log('Register successful', response);
                    },
                    error => {
                      console.error('Register failed', error);
                    }
                  );
                }
                if(this.isVet){
                  const veterinaryData={
                    name: this.registerForm.get('clinicName')?.value,
                    location: this.registerForm.get('locationClinic')?.value,
                    description: this.registerForm.get('descriptionClinic')?.value,
                    phone_number: (this.registerForm.get('phoneClinic')?.value).toString(),
                    office_hours_start: this.registerForm.get('office_hours_start')?.value,
                    office_hours_end: this.registerForm.get('office_hours_end')?.value,
                  };
                  this.veterinaryService.signUp(veterinaryData).subscribe(
                    (response :any)=>{
                      const id = parseInt(response.id);
                      this.veterinaryService.uniquePassword(id).subscribe(
                        response=>{
                          const vetData={
                            clinicName: this.registerForm.get('clinicName')?.value,
                            otp_password:response,
                          }
                          this.vetService.signUp(vetData,userId).subscribe(
                            (response: any)=>{
                              console.log('Register successful', response);
                            },
                            error=>{
                              console.error('Register failed', error);
                            }
                          )
                        },
                        error=>{
                          console.error('Request Code Error', error);
                        }
                      )

                    },
                    error=>{
                      console.error('Register failed', error);
                    }
                  )


                }
              }
              ,error=>{
                console.error('Get User failed', error);
              }
            )



            this.router.navigate(['/login']);

          },
          error => {
            console.error('Register failed', error);
          }
        );



  }
  onUserTypeChange(userType: string): void {
    this.isOwner = userType === 'Owner';
    this.isVet = userType === 'Vet';
    if (this.isOwner) {
      this.registerForm.get('name')?.setValidators([Validators.required]);
      this.registerForm.get('clinicName')?.clearValidators();
    } else {
      this.registerForm.get('name')?.clearValidators();
      this.registerForm.get('clinicName')?.setValidators([Validators.required]);
    }
    this.registerForm.get('name')?.updateValueAndValidity();
    this.registerForm.get('clinicName')?.updateValueAndValidity();
  }


}
