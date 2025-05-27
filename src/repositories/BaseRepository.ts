export abstract class BaseRepository<T> {
    protected abstract readonly model: any;

    async crear(data: T): Promise<T> {
        try {
            let dataToPersist: any = data;
            if (data && typeof (data as any).toPlainObject === 'function') {
                dataToPersist = (data as any).toPlainObject();
            }

            const entidadCreada = await this.model.create({
                data: dataToPersist,
            });
            return entidadCreada as T;
        } catch (error: any) {
            throw new Error(`Error al crear entidad: ${error}`);
        }
    }

}
