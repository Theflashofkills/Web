import { Component } from '@angular/core';

@Component({
  selector: 'app-seguro',
  templateUrl: './ac1-seguro.component.html',
  styleUrls: ['./ac1-seguro.component.css']
})
export class SeguroComponent {
  name: string = "";
  gender?: ("masculino" | "feminino");
  age: number = 0;
  vehicle_value: number = 0;
  final_value?: number;

  calcular() {
    if (this.gender === undefined)
      return;

    if (this.gender === "masculino" && this.age <= 25)
      this.final_value = .15 * this.vehicle_value;
    else if (this.gender === "masculino") {
      this.final_value = .1 * this.vehicle_value;
    }
    else {
      this.final_value = 0.08 * this.vehicle_value;
    }
  }
}