export class CostType{
    name: string;
    description: string;

    constructor(costType?: any){
        this.name = costType && costType.name || '';
        this.description = costType && costType.description || '';
    }

    check(): boolean{
        if (!this.name){
            return false;
        }

        if (!this.description){
            return false;
        }

        return true;
    }
}