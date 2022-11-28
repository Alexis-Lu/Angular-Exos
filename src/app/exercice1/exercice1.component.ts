import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  nom: string = '';

  getValue(val: string) {
    this.nom = val.toUpperCase();
  }

  polices = [
    'Arial, sans-serif',
    'Arial black',
    'Verdana, sans-serif',
    'Trebuchet MS, sans-serif',
    'Times New Roman, sans-serif',
    'Verdana',
    'Georgia, serif',
  ];

  selectedPolice: string = 'Arial, sans-serif';

  size: number = 24;

  getSize(val: string) {
    this.size = parseInt(val);
  }

  position: string = 'left';
}
