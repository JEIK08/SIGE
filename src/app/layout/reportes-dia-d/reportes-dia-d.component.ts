import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes-dia-d',
  templateUrl: './reportes-dia-d.component.html',
  styleUrls: ['./reportes-dia-d.component.scss']
})
export class ReportesDiaDComponent implements OnInit {

  public typePage = 3;

  public dateReport = [
    {
      'id': 1,
      'route': 'getReporteDiaD?reporte=pvgeneral',
      'name': 'Reporte general P.V.',
      'tittle': 'Estadística general de puestos de votación (Pos-campaña)',
      'dates': ['Localidad', 'Puesto de votación',/*  'Mesa', */ 'N° votos'],
      'series': 1,
      'label': 0
    },
    {
      'id': 2,
      'route': 'getReporteDiaD?reporte=votosmesa',
      'name': 'Votos x mesa',
      'tittle': 'Estadistica general de mesas x puestos de votación (Pos-campaña)',
      'dates': ['Localidad', 'Puesto de votación', 'Mesa', 'N° votos'],
      'series': 2,
      'label': 1
    },
    {
      'id': 3,
      'route': 'getReporteDiaD?reporte=votoslocalidad',
      'name': 'Votos x localidades',
      'tittle': 'Estadistica general por localidades (Pos-campaña)',
      'dates': ['Localidad',/*  'Puesto de votación', 'Mesa', */ 'N° votos'],
      'series': null,
      'label': 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
