import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css'],
})
export class Exercice3Component {
  hour = new Date().toLocaleTimeString();

  date = new Date().toLocaleDateString();

  id: any;

  ngOnInit() {
    this.id = setInterval(() => {
      this.hour = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.id);
  }
}
