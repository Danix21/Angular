import { IAlumno } from "Interfaces/ialumno";

export class Alumno implements IAlumno {
    Dni: number;    
    Nombre: string;
    Apellido: string;
    FechaDeNacimiento: Date;
    Direccion: string;
    Email: string;
    Telefono: string;
    Legajo: number;
}