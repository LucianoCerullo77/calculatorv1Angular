import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculator Testing with Angular';
  fatherResult = 0;

  proccessResult(result: number) {
    this.fatherResult = result;
  }
}
