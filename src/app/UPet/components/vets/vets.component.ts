import { Component, OnInit } from '@angular/core';
import { VeterinarianService } from '../../services/Veterinarian/veterinarian.service';
import { Router } from '@angular/router';
import { VeterinaryService } from '../../services/Veterinary/veterinary.service';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {
  searchText: any;
  allVets:any[]=[];
  vets: any;

  constructor(
    private vetService: VeterinarianService,
    private router: Router,
    private veterinaryService: VeterinaryService
  ) {}

  searchVet() {
    this.vets = this.allVets.filter(vet =>
      vet.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  ngOnInit() {
    this.vetService.getVets().subscribe((data: any) => {
      const clinicRequests = data.map((vet: any) => {
        const clinicId = parseInt(vet.clinicId);
        return this.veterinaryService.getVeterinary(clinicId).pipe(
          map((clinic: any) => ({
            ...vet,
            clinicName: clinic.name,
            location: clinic.location,
            services: clinic.services,
            description:clinic.description,
            openHours:clinic.office_hours_start,
            closeHours:clinic.office_hours_end,
            phone:clinic.phone_number
          }))
        );
      });

      forkJoin(clinicRequests).subscribe((vetDetails: any) => {
        this.allVets = vetDetails;
        this.vets = vetDetails;
        console.log(this.vets);
      });
    });

  }

  viewDetails(vet: any) {
    this.router.navigate(['/vet-detail'], { state: { vet } });
  }
}
