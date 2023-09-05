import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionMultipleService {

  questions: any[] = [
    {
      id: 1,
      pregunta: "¿Cuánto es 2+2?",
      opciones: [{
        opcion1: "22",
        opcion2: "4",
        opcion3: "0"
      }],
      respuesta: "4"
    },
    {
      id: 1, pregunta: "¿Cuánto es 4+6?",
      opciones: [{
        opcion1: "15",
        opcion2: "10",
        opcion3: "46"
      }],
      respuesta: "10"
    },
    {
      id: 1, pregunta: "¿un gato es un animal?",
      opciones: [{
        opcion1: "omnivoro",
        opcion2: "carnivoro",
        opcion3: "mamifero"
      }],
      respuesta: "mamifero"
    },
    {
      id: 1, pregunta: "¿cual es el color del semaforo para pasar la calle caminando?",
      opciones: [{
        opcion1: "rojo",
        opcion2: "verde",
        opcion3: "amarillo"
      }],
      respuesta: "verde"
    }]
}
