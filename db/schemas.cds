namespace entrenamiento;

using {managed} from '@sap/cds/common';
using { Attachments } from '@cap-js/attachments';


entity Alumnos : managed {
   key ID       : UUID;
       Nombre   : String    @mandatory @assert.format: '[a-zA-Z]+ [a-zA-Z]';
       Fecha    : Date      @mandatory default $now;
       Telefono : String    @assert.format: '[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]';
       email    : String    @assert.format: '[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]';
       status   : String(1) @assert.range enum {
          A;
          I;
          P
       };
       critico  : Integer;
       comentario: String;
       Curso    : Association to Cursos;
       attachments: Composition of many Attachments;
     
}

entity Cursos : managed {
   key ID             : UUID;
       Nombre         : String   @mandatory;
       MaxEstudiantes : Integer  @mandatory  @assert.range: [
          0,
          30
       ];
       estudiantes    : Association to many Alumnos
                           on estudiantes.Curso = $self;
}
