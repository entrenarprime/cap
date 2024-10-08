//@ui5-bundle estudiantescurso/Component-preload.js
sap.ui.require.preload({
	"estudiantescurso/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("estudiantescurso.Component",{metadata:{manifest:"json"}})});
},
	"estudiantescurso/i18n/i18n.properties":'# This is the resource bundle for estudiantescurso\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Estudiantes por Curso\n\n#YDES: Application description\nappDescription=An SAP Fiori application.',
	"estudiantescurso/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"estudiantescurso","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.0","toolsId":"407aa18b-3ad6-4291-bcf1-d3305d6a3773"},"dataSources":{"mainService":{"uri":"odata/v4/estudiantes-srv/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.128.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"estudiantescurso.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"VC_EstudiantesByCursosList","target":"VC_EstudiantesByCursosList"},{"pattern":"VC_EstudiantesByCursos({key}):?query:","name":"VC_EstudiantesByCursosObjectPage","target":"VC_EstudiantesByCursosObjectPage"}],"targets":{"VC_EstudiantesByCursosList":{"type":"Component","id":"VC_EstudiantesByCursosList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/VC_EstudiantesByCursos","variantManagement":"Page","navigation":{"VC_EstudiantesByCursos":{"detail":{"route":"VC_EstudiantesByCursosObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"VC_EstudiantesByCursosObjectPage":{"type":"Component","id":"VC_EstudiantesByCursosObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/VC_EstudiantesByCursos"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"estudiantescurso"}}'
});
//# sourceMappingURL=Component-preload.js.map
