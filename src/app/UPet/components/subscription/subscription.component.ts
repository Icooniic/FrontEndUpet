import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  selectedPlan: string = 'Basic';
  selectPlan(plan: string):void{
    this.selectedPlan = plan;
  }

  subscribe() {

  }
}
