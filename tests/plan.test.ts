import { Plan } from "../src/models/Plan"

test("debería crear una instancia de la clase plan y leer sus atributos", () => {
    const plan = new Plan(
        1,
        "Plan 2009",
        1
    )

    expect(plan).toBeTruthy()
    expect(plan.plan).toBe(1)
    expect(plan.nombre).toBe("Plan 2009")
    expect(plan.especialidadId).toBe(1)
})