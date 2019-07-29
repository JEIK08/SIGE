import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes-campania-localidades',
  templateUrl: './reportes-campania-localidades.component.html',
  styleUrls: ['./reportes-campania-localidades.component.scss']
})
export class ReportesCampaniaLocalidadesComponent implements OnInit {

  public typePage = 2;
  public dateReport = [
    {
      'id': 1,
      'route': 'getReporteVotosLider',
      'name': 'Votos x líder',
      'tittle': 'Estadística de votos x líder',
      'dates': ['Localidad', 'Líder', 'N° votos'],
      'series': 1,
      'label': 0
    },
    {
      'id': 2,
      'route': 'getReporteVotosIndependientes',
      'name': 'Votos independientes',
      'tittle': 'Estadísticas de votos independientes',
      'dates': ['Localidad', 'N° votos'],
      'series': null,
      'label': 0
    },
    {
      'id': 3,
      'route': 'getReporteGeneral',
      'name': 'Reporte General P.V.',
      'tittle': 'Estadística general de los puestos de votación en campaña',
      'dates': ['Localidad', 'Puesto de votación', 'Mesa', 'N° votos'],
      'series': 1,
      'label': 0,
      'tittle2': 'Estadística general de mesas x puesto de votación en campaña',
      'series2': 2,
      'label2': 1
    },
    {
      'id': 4,
      'route': '',
      'name': 'P.V. x líder',
      'tittle': 'Estadísticas de votos de líder x puesto de votación',
      'dates': ['Localidad', 'Líder', 'Puesto de votación', 'Mesa', 'N° votos'],
      'series': 1,
      'label': 2,
      'tittle2': 'Estadísticas de votos x líder',
      'series2': 1,
      'label2': 0
    },
    {
      'id': 5,
      'route': '',
      'name': '% Cumplimiento x líder',
      'tittle': 'Estadística de % cumplimiento por líderes',
      'dates': ['Localidad', 'Líder', '% cumplimiento'],
      'series': 1,
      'label': 0
    },
    {
      'id': 6,
      'route': '',
      'name': '% Cumplimiento x localidad',
      'tittle': 'Estadística de % cumplimiento por localidad',
      'dates': ['Localidad', '% cumplimiento'],
      'series': null,
      'label': 0
    },
    {
      'id': 7,
      'route': '',
      'name': 'Total votos x localidad',
      'tittle': 'Estadística del total de votos x localidades',
      'dates': ['Localidad', 'N° votos'],
      'series': null,
      'label': 0
    }
  ];
  constructor() { }

  ngOnInit() {

  }

}
