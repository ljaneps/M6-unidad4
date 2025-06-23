import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoContadorService } from '../../services/estado-contador.service';

@Component({
  selector: 'app-incrementar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './incrementar.component.html',
  styleUrl: './incrementar.component.scss'
})
export class IncrementarComponent {

  constructor(private estadoContadorService: EstadoContadorService) { }

  incrementar(): void {
    this.estadoContadorService.incrementar(5);
  }

}
