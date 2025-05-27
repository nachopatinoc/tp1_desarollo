import { get } from "http";
import { type LocalidadAtributos } from "../types";
import { LocalidadValidator } from "../validators/LocalidadValidator";
import { number } from "zod";

export class Localidad implements LocalidadAtributos {
    constructor(
        private readonly _id: number,
        private readonly _ciudad: string,
        private readonly _provincia: string,
        private readonly _paisDelC: string,
    ) {
        LocalidadValidator.validate(_id, _ciudad, _provincia, _paisDelC);

    }
    get id():number { return this._id; }
    get ciudad():string { return this._ciudad; }
    get provincia():string { return this._provincia; }
    get paisDelC():string { return this._paisDelC; }

    toPlainObject(): LocalidadAtributos {
        return {
            id: this.id,
            ciudad: this.ciudad,
            provincia: this.provincia,
            paisDelC: this.paisDelC,
        };
    }
}

