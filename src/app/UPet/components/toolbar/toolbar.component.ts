import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  isOwner = localStorage.getItem('userType') === 'Owner';
  isVet = localStorage.getItem('userType') === 'Vet';
  selectedButton: string = 'home';
  selectButton(button: string){
    this.selectedButton = button;
  }

}
