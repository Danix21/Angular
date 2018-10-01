import { ICurso } from "Interfaces/icurso";
import { Estados } from "enums/Estados";

export class Curso implements ICurso {
    Estado: Estados;
    IdCurso: number;
    Asignatura: string;
}