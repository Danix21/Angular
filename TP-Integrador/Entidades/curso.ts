import { ICurso } from "Interfaces/icurso";
import { Estados } from "enums/Estados";

export class Curso implements ICurso {
    id: string;    
    titulo: string;
    fechaInicio: Date;
    fechaFin: Date;
    asistentes: string[];
    profesor: import("d:/Programacion/Angular/TP-Integrador/Interfaces/idocente").IDocente;
    laboratorio: number;
    estado: Estados;
}