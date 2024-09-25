sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheVC_EstudiantesByCursosList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheVC_EstudiantesByCursosList.onFilterBar().iExecuteSearch();
                
                Then.onTheVC_EstudiantesByCursosList.onTable().iCheckRows();

                When.onTheVC_EstudiantesByCursosList.onTable().iPressRow(0);
                Then.onTheVC_EstudiantesByCursosObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});