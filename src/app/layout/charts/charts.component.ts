import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import * as jsPDF from 'jspdf';
// import 'jspdf-autotable';
import { ReportesService } from 'src/app/services/reportes.service';
@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {

    constructor(
        private connectReports: ReportesService
    ) { }

    @Input() public namePage: string;
    @Input() public typePage: string;
    @Input() public dateReport: JSON;

    public details = false;
    public lineChartLegend: boolean;
    public lineChartType: string;
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string;
    public secondChart = false;
    public dateSecondChart;
    public lista; // = new Array();
    public reportSelect: any;


    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
            xAxes: [{
                barPercentage: 0.7,
                barThickness: 'flex',
                maxBarThickness: 30,
                minBarLength: 5,
                gridLines: {
                    offsetGridLines: true
                }
			}],
			yAxes: [{
				ticks: { beginAtZero: true }
			}]
        },
    };
    public barChartLabels: any[]; // = new Array();
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData = new Array();

    // Doughnut
    public doughnutChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail-Order Sales'
    ];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string;

    // Radar
    public radarChartLabels: string[] = [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string;

    // Pie
    public pieChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales'
    ];

    // PolarArea
    public polarAreaChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
        'Telesales',
        'Corporate Sales'
    ];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean;

    public polarAreaChartType: string;

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];

    public selectTittle(op: any) {
        this.reportSelect = op;

        // for (let index = 0; index < 100; index++) {
        //     this.lista.push(index);
        // }

        this.loadData(op);
        // this.details = true;
        this.secondChart = false;
        if (op.tittle2) {
            this.secondChart = true;
            this.dateSecondChart = new Array(
                {
                    'tittle': op.tittle2,
                    'series': op.series2,
                    'label': op.label2
                }
            );
        }
    }

    public loadData(array: any) {
        console.log(array);
        this.connectReports.getDataReport(array.route).subscribe(
            (data: any[]) => {
				this.lista = data;
				console.log(JSON.parse(JSON.stringify(this.lista)));
				this.details = true;
				let chartData = [];
				this.barChartLabels = [];
				switch (array.route) {
					case 'getReportePresupuesto':
						this.lista.forEach((row: any) => {
							this.getFullName(row.coordinador);
							this.barChartLabels.push(row.coordinador.fullName);
							chartData.push(row.coordinador.presupuesto);
							row['Localidad'] = row.localidad.nombre;
							row['Coordinador'] = row.coordinador.fullName;
							row['Presupuesto'] = row.coordinador.presupuesto;
						});
					break;
					case 'getReporteGasto':
						let localidades: any = {};
						this.lista.forEach((row: any) => {
							if (localidades[row['Localidad']['nombre']]) localidades[row['Localidad']['nombre']]++;
							else localidades[row['Localidad']['nombre']] = 1;
							row['Clasificación'] = row['Clasificación']['nombre'];
							row['Valor'] = row['Gasto']['valor'];
							row['Nombre del gasto'] = row['Gasto']['nombre'];
							row['Localidad'] = row['Localidad']['nombre'];
						});
						Object.keys(localidades).forEach((localidad: string) => {
							this.barChartLabels.push(localidad);
							chartData.push(localidades[localidad]);
						});
					break;
					case 'getReporteVotosLider':
						let votosCandidatos: any = {};
						this.lista.forEach((row: any) => {
							this.getFullName(row['Lider']);
							if (votosCandidatos[row['Lider']['fullName']]) votosCandidatos[row['Lider']['fullName']] += row['Lider']['votosAsociados'];
							else votosCandidatos[row['Lider']['fullName']] = row['Lider']['votosAsociados'];
							row['Localidad'] = row['Localidad']['nombre'];
							row['Líder'] = row['Lider']['fullName'];
							row['N° votos'] = row['Lider']['votosAsociados'];
						});
						Object.keys(votosCandidatos).forEach((candidato: string) => {
							this.barChartLabels.push(candidato);
							chartData.push(votosCandidatos[candidato]);
						});
					break;
					case 'getReporteVotosIndependientes':

					break;
					case 'getReporteGeneral':
						let localidadesGeneral: any = {};
						this.lista.forEach((row: any) => {
							if (localidadesGeneral[row['Localidad']['nombre']]) localidadesGeneral[row['Localidad']['nombre']] += row['Numero de Votos'];
							else localidadesGeneral[row['Localidad']['nombre']] = row['Numero de Votos'];
							row['Localidad'] = row['Localidad']['nombre'];
							row['Puesto de votación'] = row['Puesto de Votancion']['nombre'];
							row['Mesa'] = row['Mesa']['nombre'];
							row['N° votos'] = row['Numero de Votos'];
						});
						Object.keys(localidadesGeneral).forEach((localidad: string) => {
							this.barChartLabels.push(localidad);
							chartData.push(localidadesGeneral[localidad]);
						});
					break;
					case 'P.V. X Lider':

					break;
					// P.V. X Lider
					case 'getReporteCumplimientoLider':

					break;
					// % Cumplimiento X Localidad
					case 'getReporteVotosLocalidad':
							let localidadVotos: any = {};
							this.lista.forEach((row: any) => {
								if (localidadVotos[row['locacion']['nombre']]) localidadVotos[row['locacion']['nombre']] += row['votantes'].length;
								else localidadVotos[row['locacion']['nombre']] = row['votantes'].length;
								row['Localidad'] = row['locacion']['nombre'];
								row['N° votos'] = row['votantes'].length;
							});
							Object.keys(localidadVotos).forEach((localidad: string) => {
								this.barChartLabels.push(localidad);
								chartData.push(localidadVotos[localidad]);
							});
					break;
				}
				this.barChartData = [
					{ data: chartData, label: 'Series A' }
				];
            },
            err => {
                console.log(err.message);
            }
        );
        /*   const serie = array.series == null ? 'Cantidad' : array.dates[array.series];
           const label = array.dates[array.label];

           this.barChartData = new Array({ data: [65, 59, 80, 81, 56, 55, 40], label: serie + ' 1' },
               { data: [28, 48, 40, 19, 86, 27, 90], label: serie + ' 2' },
               { data: [28, 48, 40, 19, 86, 27, 90], label: serie + ' 3' },
               { data: [28, 48, 40, 19, 86, 27, 90], label: serie + ' 4' },
               { data: [28, 48, 40, 19, 86, 27, 90], label: serie + ' 5' },
               { data: [28, 48, 40, 19, 86, 27, 90], label: serie + ' 6' });

           const size = this.barChartLabels.length;

           this.barChartLabels.push(
               label + ' 1',
               label + ' 2',
               label + ' 3',
               label + ' 4',
               label + ' 5',
               label + ' 6'
           );
           if (size !== 0) {
               for (let i = 0; i < size; i++) {
                   this.barChartLabels.shift();
               }
           }
           // console.log(this.barChartLabels);
           console.log('datos:', array); console.log('Serie: ' + serie); console.log('Label:', label);
   */
	}
	
	getFullName(obj: any) {
		obj.fullName = `${obj.nombre1}${obj.nombre2 ? ' ' + obj.nombre2 + ' ' : ' '}${obj.apellido1}${obj.apellido2 ? ' ' + obj.apellido2 : ''}`;
	}

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;

        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    ngOnInit() {
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.doughnutChartType = 'doughnut';
        this.radarChartType = 'radar';
        this.pieChartType = 'pie';
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.lineChartLegend = true;
        this.lineChartType = 'line';


    }

    downloadWord() {
        // tslint:disable-next-line:max-line-length
        const preHtml = '<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'><title>Export HTML To Doc</title></head><body>';
        const postHtml = '</body></html>';
        const html = preHtml + document.getElementById('word').innerHTML + postHtml;

        const blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });
        // Specify link url
        const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

        // Specify file name
        // let filename = filename?filename+'.doc':'document.doc';
        const filename = this.reportSelect.tittle + '.doc';
        // Create download link element
        const downloadLink = document.createElement('a');

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            // Create a link to the file
            downloadLink.href = url;

            // Setting the file name
            downloadLink.download = filename;

            // triggering the function
            downloadLink.click();
        }

        document.body.removeChild(downloadLink);

    }

    downloadPDF() {
        // const doc = new jsPDF('portrait', 'px', 'a4');
        // // doc.page = 1;

        // doc.text(' ¡Hola mundo! ', 10, 10);
        // doc.setFontSize(10);
        // doc.autoTable({
        //     theme: 'grid',
        //     html: '#my-table',
        //     styles: {
        //         cellWidth: 'wrap',
        //         rowPageBreak: 'auto',
        //         halign: 'center'
        //     }
        // });

        // // doc = this.addFooters(doc);

        // doc.save('a4.pdf');

    }

    private addFooters(doc: any): any {
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i < pageCount; i++) {
            doc.text('Page ' + String(i) + ' de ' + String(pageCount), 196, 285);
        }
        return doc;
    }
}
