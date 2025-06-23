import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EstadoContadorService } from '../../services/estado-contador.service';

@Component({
  selector: 'app-decrementar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decrementar.component.html',
  styleUrl: './decrementar.component.scss'
})
export class DecrementarComponent {

  constructor(private estadoContadorService: EstadoContadorService) { }

  decrementar(): void {
    this.estadoContadorService.decrementar(5);
  }

}
