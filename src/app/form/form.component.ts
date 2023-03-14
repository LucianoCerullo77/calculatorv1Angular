import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  operationA: number = 0;
  operationB: number = 0;
  result: number = 0;

  @Output() sumResult = new EventEmitter<number>();

  sum(): void {
    let result = this.operationA + this.operationB;
    this.sumResult.emit(result);
  }
}
