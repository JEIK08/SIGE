import { Location } from './location';
export class Election {
    static PRESIDENCIA = 'presidencia';
    static SENADO = 'senado';
    static ASAMBLEA = 'asamblea';
    static CAMARA = 'camara';
    static GOBERNACION = 'gobernacion';
    static JAL = 'jal';
    static ALCALDIA = 'alcaldia';
    static CONSEJO = 'consejo';

    id: number;
    date: Date;
    location: Location;
    type: string;

    constructor(election?: any) {
        this.id = election && election.id || -1;
        this.date = ((election && election.date) ? new Date(election.date) : null);
        this.location = ((election && election.location) ? new Location(election.location) : null);
        this.type = election && election.type || '';
    }

    check() {
        if (!this.date) {
            return false;
        }

        if (this.location == null) {
            return false;
        }

        if (!this.location.check()) {
            return false;
        }

        return true;
    }
}
