import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.scss'
})
export class GraficoComponent {

  data = [
    { name: 'Matemáticas', value: 8.5 },
    { name: 'Ciencias', value: 9.0 },
    { name: 'Historia', value: 7.5 }
  ];

  dataLine = [
    {
      name: 'Notas',
      series: [
        { name: 'Matemáticas', value: 8.5 },
        { name: 'Ciencias', value: 9.0 },
        { name: 'Historia', value: 7.5 }
      ]
    }
  ];

}
