import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css',
})
export class ListadoPeliculasComponent implements OnInit {

  @Input({ required: true })
  peliculas!: any[];


  title = 'angular-peliculas';
  apellido = 'Mosquera';
  edad = 23;

  ngOnInit(): void {

  }

  agregarPelicula() {
    this.peliculas.push({
      titulo: 'Inception',
      fechaLansamiento: '2025-01-29',
      precio: 500
    })
  }

  removerPelicula(pelicula: any) {
    const indice = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo);
    //Esto se usa para borrar la pelicula
    this.peliculas.splice(indice, 1);
  }

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
