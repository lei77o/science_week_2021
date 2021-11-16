import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { actividad } from '../models/actividad.model';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  constructor() { }
}


let ambiental = [{
  nombre: "Vivir sin árboles",

},
{
  nombre: "Química en casa",

},
{
  nombre: "Hoy cocina el sol",

},
{
  nombre: "¡Cuidado, agua ácida!",

},{
  nombre: "¡No se puede respirar!",

},
{
  nombre: "Limpiemos el agua",

},
{
  nombre: "SOS aguas calientes",

},
] as actividad;



