using {
    entrenamiento,
    sap.common
} from '../db/schemas';

service AdminService {
    //declaramos type comentario
    type inText : { comment: String(20); };

    entity estudiantes as projection on entrenamiento.Alumnos
    actions {
            @Common.IsActionCritical
            action notificaAluno();  
            //Activa popup      
            @Common.IsActionCritical
            action InactivaAluno(text:inText:comment);
        };

    annotate estudiantes with @odata.draft.enabled;
    annotate estudiantes with @odata.draft.bypass;

    entity Cursos      as projection on entrenamiento.Cursos;
    annotate Cursos with @odata.draft.enabled;
    annotate Cursos with @odata.draft.bypass;
}

//anotacion de seguridad
annotate AdminService with @(requires: 'admin') ;


service EstudiantesSrv {
    @readonly
    view VC_EstudiantesByCursos as
        select from entrenamiento.Cursos {
            key ID,
                Nombre             as Nombre,
                estudiantes.Nombre as NombreEstudiante,
                estudiantes.Fecha  as Fecha,
                estudiantes.email  as Correo,
                estudiantes.Telefono as Telefono

        }
}

//anotacion de seguridad
annotate EstudiantesSrv with @(requires: 'viewer') ;

//Titulo Popup - Multiples Lineas
annotate AdminService.inText:comment with @Common.Label : 'Comentarios';
annotate AdminService.inText:comment with @UI.MultiLineText:true;