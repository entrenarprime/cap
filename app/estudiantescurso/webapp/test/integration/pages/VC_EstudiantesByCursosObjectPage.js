sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'estudiantescurso',
            componentId: 'VC_EstudiantesByCursosObjectPage',
            contextPath: '/VC_EstudiantesByCursos'
        },
        CustomPageDefinitions
    );
});