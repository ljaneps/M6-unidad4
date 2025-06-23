import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EstadoContadorService } from '../../services/estado-contador.service';

@Component({
  selector: 'app-reiniciar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reiniciar.component.html',
  styleUrl: './reiniciar.component.scss'
})
export class ReiniciarComponent {

  constructor(private estadoContadorService: EstadoContadorService) { }

  reiniciar(): void {
    this.estadoContadorService.reiniciar();
  }

}
