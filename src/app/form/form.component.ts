import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  operationA: number = 0;
  operationB: number = 0;
  result: number = 0;

  sum(): void {
    this.result = this.operationA + this.operationB;
  }
}
