export class CostType {
    id: number;
    name: string;
    description: string;

    constructor(costType?: any) {
        this.id = costType && costType.id || -1;
        this.name = costType && costType.name || '';
        this.description = costType && costType.description || '';
    }

    check(): boolean {
        if (!this.name) {
            return false;
        }

        if (!this.description) {
            return false;
        }

        return true;
    }
}
