import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {
  title = 'App';
  users: any;
  data = 'vaghela kishan';
  getvalue() {
    return 'get function data';
  }
}
