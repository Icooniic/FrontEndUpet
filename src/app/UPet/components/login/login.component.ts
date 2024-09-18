import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthServiceService} from "../../services/authService/auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.authService.signIn(loginData).subscribe(
        response => {
          console.log('Login successful', response);
          this.router.navigate(['/dashboard']);
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
