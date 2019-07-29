//clase usuario
export class User {
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

    static ADMINISTRADOR: string = 'administrador';
    static DIGITADOR: string = 'digitador';
    static COORDINADOR: string = 'coordinador';
    static TESTIGO: string = 'testigo';
    static CANDIDATO: string = 'candidato';
    static LIDER: string = 'lider';

    /*
    constructor(cedula:string = '', email: string = '', name: string = '', secondName: string = '', lastname: string = '', secondLastname: string = '', password: string = '', type: string = '', address: string = '', phone = ''){
        this.cedula = cedula;
        this.email = email;
        this.name = name;
        this.secondName = secondName;
        this.lastname = lastname;
        this.secondLastname = secondLastname;
        this.password = password;
        this.type = type;
        this.address = address;
        this.phone = phone;
    }
    */

    constructor(user?: any){
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
    }

    public check(){
        if (!this.cedula){
            return false;
        }
        if(!this.name){
            return false;
        }
        if(!this.lastname){
            return false;
        }

        return true;
    }
}