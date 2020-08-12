import { Component, OnInit } from '@angular/core';
import { PuntajeEjercicio } from 'src/app/models/PuntajeEjercicio';
import { PuntajeestudianteService } from '../../../services/puntajeestudiante.service';


@Component({
  selector: 'app-introduccion-conjuntos',
  templateUrl: './introduccion-conjuntos.component.html',
  styleUrls: ['./introduccion-conjuntos.component.scss']
})
export class IntroduccionConjuntosComponent implements OnInit {

  constructor(private puntajeEstudianteService: PuntajeestudianteService) { }

  ngOnInit() {
  }
}