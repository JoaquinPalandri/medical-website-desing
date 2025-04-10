import { Component } from '@angular/core';

@Component({
  selector: 'app-panic',
  templateUrl: './panic.component.html',
  styleUrls: ['./panic.component.css']
})
export class PanicComponent {
  clickCount = 0;

  handleClick() {
    this.clickCount++;
    if (this.clickCount === 3) {
      alert('¡Alerta activada!');
      this.clickCount = 0; // Reinicia el contador si querés que pueda repetirse
    }
  }
}