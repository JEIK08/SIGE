// clase usuario
export class User {
    static ADMINISTRADOR = 'administrador';
    static DIGITADOR = 'digitador';
    static COORDINADOR = 'coordinador';
    static TESTIGO = 'testigo';
    static CANDIDATO = 'candidato';
    static LIDER = 'lider';
    static VOTANTE = 'votante';

    id: string;
    cedula: string;
    email: string;
    name: string;
    secondName: string;
    lastname: string;
    secondLastname: string;
    password: string;
    type: string;
    address: string;
    phone: string;
    budget: number;
    voteGoal: number;
    votes: number;

    constructor(user?: any) {
        if (user && user.id) {
            this.id = user.id;
        } else if (user && user.cedula) {
            this.id = user.cedula;
        } else {
            this.id = '';
        }
        this.cedula = user && user.cedula || '';
        this.email = user && user.email || '';
        this.name = user && user.name || '';
        this.secondName = user && user.secondName || '';
        this.lastname = user && user.lastname || '';
        this.secondLastname = user && user.secondLastname || '';
        this.password = user && user.password || '';
        this.type = user && user.type || '';
        this.address = user && user.address || '';
        this.phone = user && user.phone || '';
        this.budget = user && user.budget || 0;
        this.voteGoal = user && user.voteGoal || 0;
        this.votes = user && user.votes || 0;
    }

    public check() {
        if (!this.cedula) {
            return false;
        }
        if (!this.name) {
            return false;
        }
        if (!this.lastname) {
            return false;
        }

        return true;
    }
}
