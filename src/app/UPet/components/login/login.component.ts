import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthServiceService} from "../../services/authService/auth-service.service";
import {VeterinarianService} from "../../services/Veterinarian/veterinarian.service";
import {PetOwnerService} from "../../services/PetOwner/pet-owner.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private authService: AuthServiceService,private vetService:VeterinarianService,private ownerService:PetOwnerService) {}

  ngOnInit(): void {
    localStorage.clear()
    this.loginForm = this.fb.group({
      email: ['' ],
      password: ['']
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.authService.signIn(loginData).subscribe(
        (response:any) => {
          console.log('Login successful', response);
          this.authService.getUser({email: loginData.email}).subscribe(
            (response:any)=>{
              localStorage.setItem('userId',response.id)
              localStorage.setItem('userType',response.userType)
              if(response.userType === 'Owner'){
                this.ownerService.getOwner(response.id).subscribe(
                  (response:any)=>{
                    localStorage.setItem('ownerId',response.id)
                    this.router.navigate(['/home']);
                  }
                )
              }
              if(response.userType === 'Vet'){
                this.vetService.getVet(response.id).subscribe(
                  (response:any)=>{
                    localStorage.setItem('vetId',response.id)
                    this.router.navigate(['/home']);
                  }
                )
              }
            },
            error => {
              console.error('Get user failed', error);
            }


          );
        },
        error => {
          console.error('Login failed', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
