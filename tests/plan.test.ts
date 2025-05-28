import { instanicaPlan as plan } from "./utils"

test("debería crear una instancia de la clase plan y leer sus atributos", () => {

    expect(plan).toBeTruthy()
    expect(plan.plan).toBe(1)
    expect(plan.nombre).toBe("Plan 2009")
    expect(plan.especialidadId).toBe(1)
})