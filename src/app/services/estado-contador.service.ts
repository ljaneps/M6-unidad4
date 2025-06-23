import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoContadorService {

  private contadorSubject = new BehaviorSubject<number>(0);
  contador$ = this.contadorSubject.asObservable();

  incrementar(valor:number): void {
    const nuevoValor = this.contadorSubject.value + valor;
    this.contadorSubject.next(nuevoValor);
  }

  decrementar(valor:number): void {
    const nuevoValor = this.contadorSubject.value - valor;
    if (nuevoValor >= 0) {
      this.contadorSubject.next(nuevoValor);
    }
  }

  reiniciar(): void {
    this.contadorSubject.next(0);
  }

}
