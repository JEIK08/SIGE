import { CostType } from './cost-type';

export class Cost {
    id: number;
    type: CostType;
    amount: number;
    name: string;
    description: string;

    constructor(cost?: any) {
        this.id = cost && cost.id || -1;
        this.type = ((cost && cost.type) ? cost.type : null);
        this.amount = cost && cost.amount || 0;
        this.name = cost && cost.name || '';
    }

    check(): boolean {
        if (this.type == null) {
            return false;
        }

        if (this.amount < 0) {
            return false;
        }

        return true;
    }
}
