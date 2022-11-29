import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component {
  operations = ['+', '-', '*', '/'];
  selectedOperation = '+';

  firstNumber: number = 0;
  secondNumber: number = 0;

  result: any;

  history: any[] = [];

  getNumber(val: string, placement: boolean) {
    if (placement) {
      this.firstNumber = +val;
    } else {
      this.secondNumber = +val;
    }
  }

  calcul() {
    const date = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    });
    const infos = {
      n1: this.firstNumber,
      n2: this.secondNumber,
      operation: this.selectedOperation,
      time: date,
      result: eval(
        this.firstNumber + this.selectedOperation + this.secondNumber
      ),
    };
    this.history.push(infos);
    this.result = eval(
      this.firstNumber + this.selectedOperation + this.secondNumber
    );
  }

  handleDelete(val: any) {
    this.history.splice(this.history.indexOf(val), 1);
  }
}
