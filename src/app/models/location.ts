export class Location {
    static PAIS = 'pais';
    static REGION = 'region';
    static DEPARTAMENTO = 'departamento';
    static MUNICIPIO = 'municipio';
    static LOCALIDAD = 'localidad';
    static PUESTO_DE_VOTACION = 'puesto_de_votacion';
    static MESA_DE_VOTACION = 'mesa_de_votacion';

    id: number;
    name: string;
    type: string;

    constructor(location?: any) {
        this.id = location && location.id || -1;
        this.name = location && location.name || '';
        this.type = location && location.type || '';
    }

    check(): boolean {
        if (!this.name) {
            return false;
        }

        if (!this.type) {
            return false;
        }

        return true;
    }
}
