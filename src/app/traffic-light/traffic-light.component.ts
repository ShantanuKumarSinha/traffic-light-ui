import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.scss'
})
export class TrafficLightComponent {
  lights= ['red','yellow','green'];
  currentLightIndex = 0;

  get currentLight(): string{
    return this.lights[this.currentLightIndex];
  }

  changeLight(): void {
    this.currentLightIndex = (this.currentLightIndex + 1) % this.lights.length;
  }

}
