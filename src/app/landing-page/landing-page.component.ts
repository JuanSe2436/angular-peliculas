import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";
import { RatingComponent } from "../compartidos/componentes/rating/rating.component";

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent, RatingComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
