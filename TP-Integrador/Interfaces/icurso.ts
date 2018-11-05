import { Estados } from "enums/Estados";
import { IDocente } from "./idocente";

export interface ICurso {
    id: string;
    titulo: string;
    fechaInicio: Date;
    fechaFin: Date;
    asistentes: string[];
    profesor: IDocente;
    laboratorio: number;
    estado: Estados;
}