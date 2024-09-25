sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'estudiantescurso',
            componentId: 'VC_EstudiantesByCursosList',
            contextPath: '/VC_EstudiantesByCursos'
        },
        CustomPageDefinitions
    );
});