import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../services/authService/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  registerForm!:FormGroup;
  isOwner: boolean = true;
  isVet: boolean = false;
  constructor(private fb: FormBuilder, private router: Router,private authService: AuthServiceService) {}

  ngOnInit():void  {
    this.registerForm = this.fb.group({
      name:[''],
      email: [''],
      password: [''],
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
        this.authService.signUp(registerData).subscribe(
          response => {
            console.log('Register successful', response);
            this.router.navigate(['/login']);
            if(this.isOwner){}
            else{}

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
