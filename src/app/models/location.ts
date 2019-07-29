export class Location{
    id: number;
    name: string;
    type: string;

    static PAIS = "pais";
    static REGION = "region";
    static DEPARTAMENTO = "departamento";
    static MUNICIPIO = "municipio";
    static LOCALIDAD = "localidad";
    static PUESTO_DE_VOTACION = "puesto_de_votacion";
    static MESA_DE_VOTACION = "mesa_de_votacion";

    /*
    constructor(id: number = -1, name: string = '', type: string = ''){
        this.id = id;
        this.name = name;
        this.type = type;
    }
    */
   
    constructor(location?: any){
        this.id = location && location.id || -1;
        this.name = location && location.name || '';
        this.type = location && location.type || '';
    }

    check(): boolean{
        if (!this.name){
            return false;
        }

        if (!this.type){
            return false
        }

        return true;
    }
}