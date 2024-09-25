sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'estudiantescurso/test/integration/FirstJourney',
		'estudiantescurso/test/integration/pages/VC_EstudiantesByCursosList',
		'estudiantescurso/test/integration/pages/VC_EstudiantesByCursosObjectPage'
    ],
    function(JourneyRunner, opaJourney, VC_EstudiantesByCursosList, VC_EstudiantesByCursosObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('estudiantescurso') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheVC_EstudiantesByCursosList: VC_EstudiantesByCursosList,
					onTheVC_EstudiantesByCursosObjectPage: VC_EstudiantesByCursosObjectPage
                }
            },
            opaJourney.run
        );
    }
);