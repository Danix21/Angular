import { Estados } from "enums/Estados";

export interface ICurso {
    IdCurso : number;
    Asignatura : string;
    Estado : Estados
}