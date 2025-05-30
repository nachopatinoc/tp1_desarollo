import { PlanService } from "../src/services/PlanService";
import { instanicaPlan as nuevoPlan } from "./utils";

test('Deberia crear y gurdar un plan en la base de datos', async () => {
    const planCreado = await PlanService.crearPlan(nuevoPlan);

    const planDB = await globalThis.prisma.planes.findFirst({
        where: { plan: planCreado.plan },
    })

    expect(planDB).toBeTruthy()
    expect(planDB?.plan).toBe(nuevoPlan.plan)
    expect(planDB?.nombre).toBe(nuevoPlan.nombre)
    expect(planDB?.especialidadId).toBe(nuevoPlan.especialidadId)
})

