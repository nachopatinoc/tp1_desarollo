import { Plan } from "../src/models/Plan";
import { PlanService } from "../src/services/PlanService";

test('deberia crear y gurdar un plan en la base de datos', async () => {
    const nuevoPlan = new Plan(
        274,
        "2009",
        2019
    );
    const planCreado = await PlanService.crearPlan(nuevoPlan);

    const planDB = await globalThis.prisma.planes.findUnique({
        where: { id: planCreado.id },
    })

    expect(planDB).toBeTruthy()
    expect(planDB?.id).toBe(nuevoPlan.id)
    expect(planDB?.nombre).toBe(nuevoPlan.nombre)
    expect(planDB?.especialidadId).toBe(nuevoPlan.especialidadId)
})

