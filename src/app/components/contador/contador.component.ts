import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EstadoContadorService } from '../../services/estado-contador.service';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {

  contador: number = 0;

  constructor(private estadoContadorService: EstadoContadorService) {
    this.estadoContadorService.contador$.subscribe(valor => {
      this.contador = valor;
    });
   }

}
