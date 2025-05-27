import { Localidad } from "../src/models/Localidad";
import { LocalidadService } from "../src/services/LocalidadService";

test("deberia crear y guardar una localidad en la base de datos", async () => {
    const nuevaLocalidad = new Localidad(
        1,
        "Mar del Plata",
        "Mar del Plata",
        "Argentina"
    );
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

