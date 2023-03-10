import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculator Testing with Angular';
  operationA: number = 0;
  operationB: number = 0;
  result: number = 0;

}
