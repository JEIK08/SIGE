export class Event{
    name: string;
    description: string;
    place: string;
    dateBeginning: Date;
    dateEnd: Date;

    constructor(event?: any){
        this.name = event && event.name || '';
        this.description = event && event.description || '';
        this.place = event && event.place || '';
        this.dateBeginning = ((event && event.dateBeginning) ? new Date(event.dateBeginning) : null);
        this.dateEnd = ((event && event.dateEnd) ? new Date(event.dateEnd) : null);
    }

    check(): boolean{
        if (!this.name){
            return false;
        }

        if (!this.dateBeginning){
            return false;
        }

        if (!this.dateEnd){
            return false;
        }

        return true;

    }
}