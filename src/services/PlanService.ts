import { PlanRepository } from "../repositories/PlanRepository";
import { PlanAtributos } from "../types";

export class PlanService {
    private static readonly planRepository = new PlanRepository();

    static crearPlan(plan: PlanAtributos): Promise<PlanAtributos> {
        return this.planRepository.crear(plan);
    }

}
