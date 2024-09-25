using AdminService as service from '../../srv/services';

annotate service.estudiantes with @(
    UI.FieldGroup #GeneratedGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: '{i18n>Nombre}',
                Value: Nombre,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Fecha',
                Value: Fecha,
            },
            {
                $Type: 'UI.DataField',
                Value: email,
                Label: 'Correo',
            },
            {
                $Type: 'UI.DataField',
                Value: Telefono,
                Label: 'Telefono',
            },
            {
                $Type      : 'UI.DataField',
                Value      : status,
                Label      : 'status',
                Criticality: critico,
            },
            {
                $Type: 'UI.DataField',
                Value: critico,
                Label: 'critico',
            },
            {
                $Type: 'UI.DataField',
                Value: comentario,
                Label: 'comentario',
            },
        ],
    },
    UI.Facets                    : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet1',
        Label : 'Detalles de Alumnos',
        Target: '@UI.FieldGroup#GeneratedGroup',
    }, ],
    UI.LineItem                  : [
        {
            $Type: 'UI.DataField',
            Label: 'Nombre',
            Value: Nombre,
        },
        {
            $Type: 'UI.DataField',
            Label: 'Fecha',
            Value: Fecha,
        },
        {
            $Type: 'UI.DataField',
            Label: 'Correo',
            Value: email,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'AdminService.notificaAluno',
            Label : 'Notificar Alumno',
        },
    ],
    UI.Identification            : [{
        $Type        : 'UI.DataFieldForAction',
        Action       : 'AdminService.InactivaAluno',
        Label        : 'InactivaAluno',
        ![@UI.Hidden]: { $edmJson: { $If: [
            { $Eq: [
                {$Path: 'IsActiveEntity'},
                false // IsActiveEntity=false significa que estas edit mode
            ]},
            true,
            false
        ]}}
    }, ],

);

annotate service.estudiantes with {
    Curso @Common.ValueList: {
        $Type         : 'Common.ValueListType',
        CollectionPath: 'Cursos',
        Parameters    : [
            {
                $Type            : 'Common.ValueListParameterInOut',
                LocalDataProperty: Curso_ID,
                ValueListProperty: 'ID',
            },
            {
                $Type            : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty: 'Nombre',
            },
            {
                $Type            : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty: 'MaxEstudiantes',
            },
        ],
    }
};

annotate service.estudiantes with {
    critico @Common.FieldControl: #ReadOnly
};

annotate service.estudiantes with {
    comentario @Common.FieldControl: #ReadOnly
};
