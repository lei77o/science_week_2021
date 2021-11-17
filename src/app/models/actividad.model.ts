import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface actividad{
    nombre?: string,
    videoUrl?: string,
    indicaciones?: string,
    titulo1?: string,
    texto1?: string,
    titulo2?: string,
    texto2?: string,
    url?:string,
    width?: string,
    height?: string,
    script?: string,
    img?: string[],
    pdf?: string;
}