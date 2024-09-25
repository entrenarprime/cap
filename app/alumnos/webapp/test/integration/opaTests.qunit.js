sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'alumnos/test/integration/FirstJourney',
		'alumnos/test/integration/pages/estudiantesList',
		'alumnos/test/integration/pages/estudiantesObjectPage'
    ],
    function(JourneyRunner, opaJourney, estudiantesList, estudiantesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('alumnos') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheestudiantesList: estudiantesList,
					onTheestudiantesObjectPage: estudiantesObjectPage
                }
            },
            opaJourney.run
        );
    }
);