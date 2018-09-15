import { IDocente } from "Interfaces/idocente";

export class Docente implements IDocente{
    Dni: number;    
    Nombre: string;
    Apellido: string;
    FechaDeNacimiento: Date;
    Direccion: string;
    Email: string;
    Telefono: string;
    Legajo: number;
    Cuil: string;
}