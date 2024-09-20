import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vet-profile',
  templateUrl: './vet-profile.component.html',
  styleUrl: './vet-profile.component.css'
})
export class VetProfileComponent implements OnInit{
  vet: any;
  constructor(private route:ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.vet = history.state.vet;
    console.log(this.vet)
  }
  goBack() {
    this.router.navigate(['/vets']);
  }
}
