import { LocalidadService } from "../src/services/LocalidadService";
import { instanciaLocalidad as nuevaLocalidad } from "./utils";

test("Deberia crear y guardar una localidad en la base de datos", async () => {
    const localidadCreada = await LocalidadService.crearLocalidad(nuevaLocalidad);
    const localidadBD = await globalThis.prisma.localidades.findUnique({
        where: { id: localidadCreada.id },
    })
    expect(localidadBD).toBeTruthy()
    expect(localidadBD?.id).toBe(nuevaLocalidad.id)
    expect(localidadBD?.ciudad).toBe(nuevaLocalidad.ciudad)
    expect(localidadBD?.provincia).toBe(nuevaLocalidad.provincia)
    expect(localidadBD?.paisDelC).toBe(nuevaLocalidad.paisDelC)
})

