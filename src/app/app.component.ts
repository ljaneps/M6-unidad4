import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { ReiniciarComponent } from './components/reiniciar/reiniciar.component';
import { DecrementarComponent } from './components/decrementar/decrementar.component';
import { IncrementarComponent } from './components/incrementar/incrementar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, ContadorComponent, IncrementarComponent, DecrementarComponent, ReiniciarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Unidad-4';
}
